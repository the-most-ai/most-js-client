import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios';

declare namespace Components {
    namespace Schemas {
        /**
         * AudioResult
         */
        export interface AudioResult {
            /**
             * Id
             */
            id: string;
            /**
             * Text
             */
            text: /* Text */ string | null;
            /**
             * Url
             */
            url: /* Url */ string | null;
            /**
             * Results
             */
            results: /* Results */ /* ColumnResult */ ColumnResult[] | null;
        }
        /**
         * AudioUpload
         */
        export interface AudioUpload {
            /**
             * Id
             */
            id: string;
            /**
             * Url
             */
            url: /* Url */ string | null;
        }
        /**
         * AuthCredentials
         */
        export interface AuthCredentials {
            /**
             * Client Id
             */
            client_id: string;
            /**
             * Client Secret
             */
            client_secret: string;
        }
        /**
         * Body_upload_audio_api_external__client_id__upload_post
         */
        export interface BodyUploadAudioApiExternalClientIdUploadPost {
            /**
             * Audio File
             */
            audio_file: string; // binary
        }
        /**
         * ColumnResult
         */
        export interface ColumnResult {
            /**
             * Name
             */
            name: string;
            /**
             * Subcolumns
             */
            subcolumns: /* SubcolumnResult */ SubcolumnResult[];
        }
        /**
         * HTTPValidationError
         */
        export interface HTTPValidationError {
            /**
             * Detail
             */
            detail?: /* ValidationError */ ValidationError[];
        }
        /**
         * SubcolumnResult
         */
        export interface SubcolumnResult {
            /**
             * Name
             */
            name: string;
            /**
             * Score
             */
            score: /* Score */ number | null;
            /**
             * Description
             */
            description: string;
        }
        /**
         * ValidationError
         */
        export interface ValidationError {
            /**
             * Location
             */
            loc: (string | number)[];
            /**
             * Message
             */
            msg: string;
            /**
             * Error Type
             */
            type: string;
        }
    }
}
declare namespace Paths {
    namespace AccessTokenApiExternalAccessTokenPost {
        export type RequestBody = /* AuthCredentials */ Components.Schemas.AuthCredentials;
        namespace Responses {
            export type $200 = any;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace ApplyModelApiExternalClientIdAudioAudioIdModelModelIdApplyPost {
        namespace Parameters {
            /**
             * Audio Id
             */
            export type AudioId = string;
            /**
             * Client Id
             */
            export type ClientId = string;
            /**
             * Model Id
             */
            export type ModelId = string;
        }
        export interface PathParameters {
            client_id: /* Client Id */ Parameters.ClientId;
            audio_id: /* Audio Id */ Parameters.AudioId;
            model_id: /* Model Id */ Parameters.ModelId;
        }
        namespace Responses {
            export type $200 = /* AudioResult */ Components.Schemas.AudioResult;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace ApplyModelLaterApiExternalClientIdAudioAudioIdModelModelIdApplyAsyncPost {
        namespace Parameters {
            /**
             * Audio Id
             */
            export type AudioId = string;
            /**
             * Client Id
             */
            export type ClientId = string;
            /**
             * Model Id
             */
            export type ModelId = string;
        }
        export interface PathParameters {
            client_id: /* Client Id */ Parameters.ClientId;
            audio_id: /* Audio Id */ Parameters.AudioId;
            model_id: /* Model Id */ Parameters.ModelId;
        }
        namespace Responses {
            export type $200 = any;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace DownloadAppJsonSchemaAsyncapiJsonGet {
        namespace Responses {
            export type $200 = any;
        }
    }
    namespace DownloadAppYamlSchemaAsyncapiYamlGet {
        namespace Responses {
            export type $200 = any;
        }
    }
    namespace ListAudiosApiExternalClientIdListGet {
        namespace Parameters {
            /**
             * Client Id
             */
            export type ClientId = string;
            /**
             * Limit
             */
            export type Limit = number;
            /**
             * Offset
             */
            export type Offset = number;
        }
        export interface PathParameters {
            client_id: /* Client Id */ Parameters.ClientId;
        }
        export interface QueryParameters {
            offset?: /* Offset */ Parameters.Offset;
            limit?: /* Limit */ Parameters.Limit;
        }
        namespace Responses {
            /**
             * Response List Audios Api External  Client Id  List Get
             */
            export type $200 = /* AudioUpload */ Components.Schemas.AudioUpload[];
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace ListModelsApiExternalListModelsGet {
        namespace Responses {
            export type $200 = any;
        }
    }
    namespace ProcessContentApiProcessPathPost {
        namespace Parameters {
            /**
             * Path
             */
            export type Path = string;
        }
        export interface PathParameters {
            path: /* Path */ Parameters.Path;
        }
        namespace Responses {
            export type $200 = any;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace RetrieveResultsApiExternalClientIdAudioAudioIdModelModelIdResultsGet {
        namespace Parameters {
            /**
             * Audio Id
             */
            export type AudioId = string;
            /**
             * Client Id
             */
            export type ClientId = string;
            /**
             * Model Id
             */
            export type ModelId = string;
        }
        export interface PathParameters {
            client_id: /* Client Id */ Parameters.ClientId;
            audio_id: /* Audio Id */ Parameters.AudioId;
            model_id: /* Model Id */ Parameters.ModelId;
        }
        namespace Responses {
            export type $200 = /* AudioResult */ Components.Schemas.AudioResult;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace RetrieveTextApiExternalClientIdAudioAudioIdModelModelIdTextGet {
        namespace Parameters {
            /**
             * Audio Id
             */
            export type AudioId = string;
            /**
             * Client Id
             */
            export type ClientId = string;
            /**
             * Model Id
             */
            export type ModelId = string;
        }
        export interface PathParameters {
            client_id: /* Client Id */ Parameters.ClientId;
            audio_id: /* Audio Id */ Parameters.AudioId;
            model_id: /* Model Id */ Parameters.ModelId;
        }
        namespace Responses {
            export type $200 = /* AudioResult */ Components.Schemas.AudioResult;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace SendContentApiAjaxContentPathPost {
        namespace Parameters {
            /**
             * Path
             */
            export type Path = string;
        }
        export interface PathParameters {
            path: /* Path */ Parameters.Path;
        }
        namespace Responses {
            export type $200 = any;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace SendContentApiContentPathGet {
        namespace Parameters {
            /**
             * Path
             */
            export type Path = string;
        }
        export interface PathParameters {
            path: /* Path */ Parameters.Path;
        }
        namespace Responses {
            export type $200 = any;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace ServeAsyncapiSchemaAsyncapiGet {
        namespace Parameters {
            /**
             * Errors
             */
            export type Errors = boolean;
            /**
             * Expandmessageexamples
             */
            export type ExpandMessageExamples = boolean;
            /**
             * Info
             */
            export type Info = boolean;
            /**
             * Messages
             */
            export type Messages = boolean;
            /**
             * Operations
             */
            export type Operations = boolean;
            /**
             * Schemas
             */
            export type Schemas = boolean;
            /**
             * Servers
             */
            export type Servers = boolean;
            /**
             * Sidebar
             */
            export type Sidebar = boolean;
        }
        export interface QueryParameters {
            sidebar?: /* Sidebar */ Parameters.Sidebar;
            info?: /* Info */ Parameters.Info;
            servers?: /* Servers */ Parameters.Servers;
            operations?: /* Operations */ Parameters.Operations;
            messages?: /* Messages */ Parameters.Messages;
            schemas?: /* Schemas */ Parameters.Schemas;
            errors?: /* Errors */ Parameters.Errors;
            expandMessageExamples?: /* Expandmessageexamples */ Parameters.ExpandMessageExamples;
        }
        namespace Responses {
            export type $200 = any;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace UploadAudioApiExternalClientIdUploadPost {
        namespace Parameters {
            /**
             * Client Id
             */
            export type ClientId = string;
        }
        export interface PathParameters {
            client_id: /* Client Id */ Parameters.ClientId;
        }
        export type RequestBody = /* Body_upload_audio_api_external__client_id__upload_post */ Components.Schemas.BodyUploadAudioApiExternalClientIdUploadPost;
        namespace Responses {
            export type $200 = /* AudioUpload */ Components.Schemas.AudioUpload;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
}

export interface OperationMethods {
  /**
   * send_content_api_content__path__get - Send Content
   */
  'send_content_api_content__path__get'(
    parameters?: Parameters<Paths.SendContentApiContentPathGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SendContentApiContentPathGet.Responses.$200>
  /**
   * send_content_api_ajax_content__path__post - Send Content
   */
  'send_content_api_ajax_content__path__post'(
    parameters?: Parameters<Paths.SendContentApiAjaxContentPathPost.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SendContentApiAjaxContentPathPost.Responses.$200>
  /**
   * process_content_api_process__path__post - Process Content
   */
  'process_content_api_process__path__post'(
    parameters?: Parameters<Paths.ProcessContentApiProcessPathPost.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ProcessContentApiProcessPathPost.Responses.$200>
  /**
   * access_token_api_external_access_token_post - Get access token
   * 
   * Get access token from clientId and clientSecret
   */
  'access_token_api_external_access_token_post'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.AccessTokenApiExternalAccessTokenPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AccessTokenApiExternalAccessTokenPost.Responses.$200>
  /**
   * list_models_api_external_list_models_get - List trained models for user
   * 
   * List all available trained models
   */
  'list_models_api_external_list_models_get'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListModelsApiExternalListModelsGet.Responses.$200>
  /**
   * upload_audio_api_external__client_id__upload_post - Upload an audio
   * 
   * Uploads audio and returns ID
   */
  'upload_audio_api_external__client_id__upload_post'(
    parameters?: Parameters<Paths.UploadAudioApiExternalClientIdUploadPost.PathParameters> | null,
    data?: Paths.UploadAudioApiExternalClientIdUploadPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UploadAudioApiExternalClientIdUploadPost.Responses.$200>
  /**
   * list_audios_api_external__client_id__list_get - List audio files
   * 
   * List all audio files in bucket
   */
  'list_audios_api_external__client_id__list_get'(
    parameters?: Parameters<Paths.ListAudiosApiExternalClientIdListGet.QueryParameters & Paths.ListAudiosApiExternalClientIdListGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListAudiosApiExternalClientIdListGet.Responses.$200>
  /**
   * apply_model_api_external__client_id__audio__audio_id__model__model_id__apply_post - Apply model to audio and get results instantly
   * 
   * Apply model to audio and get results instantly
   */
  'apply_model_api_external__client_id__audio__audio_id__model__model_id__apply_post'(
    parameters?: Parameters<Paths.ApplyModelApiExternalClientIdAudioAudioIdModelModelIdApplyPost.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ApplyModelApiExternalClientIdAudioAudioIdModelModelIdApplyPost.Responses.$200>
  /**
   * apply_model_later_api_external__client_id__audio__audio_id__model__model_id__apply_async_post - Apply model to audio and get results later
   * 
   * Apply model to audio and get results later, we can notify you, when results will be available
   */
  'apply_model_later_api_external__client_id__audio__audio_id__model__model_id__apply_async_post'(
    parameters?: Parameters<Paths.ApplyModelLaterApiExternalClientIdAudioAudioIdModelModelIdApplyAsyncPost.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ApplyModelLaterApiExternalClientIdAudioAudioIdModelModelIdApplyAsyncPost.Responses.$200>
  /**
   * retrieve_results_api_external__client_id__audio__audio_id__model__model_id__results_get - Get results of check list of audio from model if available
   * 
   * Get results of check list of audio from model if available
   */
  'retrieve_results_api_external__client_id__audio__audio_id__model__model_id__results_get'(
    parameters?: Parameters<Paths.RetrieveResultsApiExternalClientIdAudioAudioIdModelModelIdResultsGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.RetrieveResultsApiExternalClientIdAudioAudioIdModelModelIdResultsGet.Responses.$200>
  /**
   * retrieve_text_api_external__client_id__audio__audio_id__model__model_id__text_get - Get transcribed text of audio from Model if available
   * 
   * Get transcribed text of audio from Model if available
   */
  'retrieve_text_api_external__client_id__audio__audio_id__model__model_id__text_get'(
    parameters?: Parameters<Paths.RetrieveTextApiExternalClientIdAudioAudioIdModelModelIdTextGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.RetrieveTextApiExternalClientIdAudioAudioIdModelModelIdTextGet.Responses.$200>
  /**
   * serve_asyncapi_schema_asyncapi_get - Serve Asyncapi Schema
   * 
   * Serve the AsyncAPI schema as an HTML response.
   */
  'serve_asyncapi_schema_asyncapi_get'(
    parameters?: Parameters<Paths.ServeAsyncapiSchemaAsyncapiGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ServeAsyncapiSchemaAsyncapiGet.Responses.$200>
  /**
   * download_app_json_schema_asyncapi_json_get - Download App Json Schema
   */
  'download_app_json_schema_asyncapi_json_get'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DownloadAppJsonSchemaAsyncapiJsonGet.Responses.$200>
  /**
   * download_app_yaml_schema_asyncapi_yaml_get - Download App Yaml Schema
   */
  'download_app_yaml_schema_asyncapi_yaml_get'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DownloadAppYamlSchemaAsyncapiYamlGet.Responses.$200>
}

export interface PathsDictionary {
  ['/api/content/{path}']: {
    /**
     * send_content_api_content__path__get - Send Content
     */
    'get'(
      parameters?: Parameters<Paths.SendContentApiContentPathGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SendContentApiContentPathGet.Responses.$200>
  }
  ['/api/ajax_content/{path}']: {
    /**
     * send_content_api_ajax_content__path__post - Send Content
     */
    'post'(
      parameters?: Parameters<Paths.SendContentApiAjaxContentPathPost.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SendContentApiAjaxContentPathPost.Responses.$200>
  }
  ['/api/process/{path}']: {
    /**
     * process_content_api_process__path__post - Process Content
     */
    'post'(
      parameters?: Parameters<Paths.ProcessContentApiProcessPathPost.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ProcessContentApiProcessPathPost.Responses.$200>
  }
  ['/api/external/access_token']: {
    /**
     * access_token_api_external_access_token_post - Get access token
     * 
     * Get access token from clientId and clientSecret
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AccessTokenApiExternalAccessTokenPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AccessTokenApiExternalAccessTokenPost.Responses.$200>
  }
  ['/api/external/list_models']: {
    /**
     * list_models_api_external_list_models_get - List trained models for user
     * 
     * List all available trained models
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListModelsApiExternalListModelsGet.Responses.$200>
  }
  ['/api/external/{client_id}/upload']: {
    /**
     * upload_audio_api_external__client_id__upload_post - Upload an audio
     * 
     * Uploads audio and returns ID
     */
    'post'(
      parameters?: Parameters<Paths.UploadAudioApiExternalClientIdUploadPost.PathParameters> | null,
      data?: Paths.UploadAudioApiExternalClientIdUploadPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UploadAudioApiExternalClientIdUploadPost.Responses.$200>
  }
  ['/api/external/{client_id}/list']: {
    /**
     * list_audios_api_external__client_id__list_get - List audio files
     * 
     * List all audio files in bucket
     */
    'get'(
      parameters?: Parameters<Paths.ListAudiosApiExternalClientIdListGet.QueryParameters & Paths.ListAudiosApiExternalClientIdListGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListAudiosApiExternalClientIdListGet.Responses.$200>
  }
  ['/api/external/{client_id}/audio/{audio_id}/model/{model_id}/apply']: {
    /**
     * apply_model_api_external__client_id__audio__audio_id__model__model_id__apply_post - Apply model to audio and get results instantly
     * 
     * Apply model to audio and get results instantly
     */
    'post'(
      parameters?: Parameters<Paths.ApplyModelApiExternalClientIdAudioAudioIdModelModelIdApplyPost.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ApplyModelApiExternalClientIdAudioAudioIdModelModelIdApplyPost.Responses.$200>
  }
  ['/api/external/{client_id}/audio/{audio_id}/model/{model_id}/apply_async']: {
    /**
     * apply_model_later_api_external__client_id__audio__audio_id__model__model_id__apply_async_post - Apply model to audio and get results later
     * 
     * Apply model to audio and get results later, we can notify you, when results will be available
     */
    'post'(
      parameters?: Parameters<Paths.ApplyModelLaterApiExternalClientIdAudioAudioIdModelModelIdApplyAsyncPost.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ApplyModelLaterApiExternalClientIdAudioAudioIdModelModelIdApplyAsyncPost.Responses.$200>
  }
  ['/api/external/{client_id}/audio/{audio_id}/model/{model_id}/results']: {
    /**
     * retrieve_results_api_external__client_id__audio__audio_id__model__model_id__results_get - Get results of check list of audio from model if available
     * 
     * Get results of check list of audio from model if available
     */
    'get'(
      parameters?: Parameters<Paths.RetrieveResultsApiExternalClientIdAudioAudioIdModelModelIdResultsGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.RetrieveResultsApiExternalClientIdAudioAudioIdModelModelIdResultsGet.Responses.$200>
  }
  ['/api/external/{client_id}/audio/{audio_id}/model/{model_id}/text']: {
    /**
     * retrieve_text_api_external__client_id__audio__audio_id__model__model_id__text_get - Get transcribed text of audio from Model if available
     * 
     * Get transcribed text of audio from Model if available
     */
    'get'(
      parameters?: Parameters<Paths.RetrieveTextApiExternalClientIdAudioAudioIdModelModelIdTextGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.RetrieveTextApiExternalClientIdAudioAudioIdModelModelIdTextGet.Responses.$200>
  }
  ['/asyncapi']: {
    /**
     * serve_asyncapi_schema_asyncapi_get - Serve Asyncapi Schema
     * 
     * Serve the AsyncAPI schema as an HTML response.
     */
    'get'(
      parameters?: Parameters<Paths.ServeAsyncapiSchemaAsyncapiGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ServeAsyncapiSchemaAsyncapiGet.Responses.$200>
  }
  ['/asyncapi.json']: {
    /**
     * download_app_json_schema_asyncapi_json_get - Download App Json Schema
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DownloadAppJsonSchemaAsyncapiJsonGet.Responses.$200>
  }
  ['/asyncapi.yaml']: {
    /**
     * download_app_yaml_schema_asyncapi_yaml_get - Download App Yaml Schema
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DownloadAppYamlSchemaAsyncapiYamlGet.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>

export type AudioResult = Components.Schemas.AudioResult;
export type AudioUpload = Components.Schemas.AudioUpload;
export type AuthCredentials = Components.Schemas.AuthCredentials;
export type Body_upload_audio_api_external__client_id__upload_post = Components.Schemas.BodyUploadAudioApiExternalClientIdUploadPost;
export type ColumnResult = Components.Schemas.ColumnResult;
export type HTTPValidationError = Components.Schemas.HTTPValidationError;
export type SubcolumnResult = Components.Schemas.SubcolumnResult;
export type ValidationError = Components.Schemas.ValidationError;
