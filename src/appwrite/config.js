import conf from '../conf/conf';
import { Client, Databases, Storage, Query, ID, Permission, Role } from 'appwrite';


export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl) 
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content , featuredImage, status,userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
               slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );
           
        } catch (error) {
            console.error('Appwrite service :: Error creating post:',error );
            throw error;
        }
    }

    async updatePost(slug,{title,content , featuredImage, status, }) {
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {
                title,
                content,
                featuredImage,
                status,
            });
            // return document;
        } catch (error) {
            console.error('Appwrite service :: Error updating post:', error);
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return true
        }
            catch (error) {
            console.error('Appwrite service deletePost :: Error deleting post:', error);
            return false;
        }
        
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug 
            );
        } catch (error) {
            console.error('Appwrite service :: Error getting post:', error);
           
            return false; 
        }
    }
    
    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                

            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
                [Permission.read(Role.any())]
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        if (!fileId) return "";

        return this.bucket.getFileView(
            conf.appwriteBucketId,
            fileId
        );
    }

}

const service = new Service();
export default service 
