import type { CancelablePromise } from './core/CancelablePromise';
import { OpenAPI } from './core/OpenAPI';
import { request as __request } from './core/request';

import type { ListMessagesViewModel_Input,BaseMessageContent,CreateDefaultDataViewModel,DemoViewModel,GetClientDataForDownloadViewModel,GetClientDataForUploadViewModel,ListConversationsViewModel,ListResearchContextsViewModel,ListSourceDataForResearchContextViewModel_Input,ListSourceDataViewModel_Input,NewConversationViewModel,NewMessageViewModel,NewResearchContextViewModel,NewSourceDataViewModel_Input } from './models';

export type ListMessagesData = {
        ListMessages: {
                    id: number
xAuthToken: string
                    
                };
    }

export type ClientData = {
        ListMessages: {
                    id: number
xAuthToken: string
                    
                };
CreateConversation: {
                    conversationTitle: string
id: number
xAuthToken: string
                    
                };
ListConversations: {
                    id: number
xAuthToken: string
                    
                };
GetClientDataForDownload: {
                    id: number
protocol: string
relativePath: string
xAuthToken: string
                    
                };
CreateDefaultData: {
                    clientSub: string
llmName: string
xAuthToken: string
                    
                };
CreateMessage: {
                    id: number
requestBody: Array<BaseMessageContent>
senderType: string
threadId?: number | null
xAuthToken: string
                    
                };
CreateResearchContext: {
                    clientSub?: string | null
externalId: string
llmName?: string | null
requestBody: Array<number>
researchContextDescription: string
researchContextTitle: string
xAuthToken: string
                    
                };
ExtendResearchContext: {
                    clientSub: string
existingResearchContextId: number
externalId: string
llmName: string
newResearchContextDescription: string
newResearchContextTitle: string
requestBody: Array<number>
xAuthToken: string
                    
                };
ListSourceData: {
                    id: number | null
xAuthToken: string
                    
                };
RegisterSourceData: {
                    id: number
sourceDataName: string
sourceDataProtocol: string
sourceDataRelativePath: string
xAuthToken: string
                    
                };
ListResearchContexts: {
                    id: number
xAuthToken: string
                    
                };
ListSourceDataForResearchContext: {
                    id: number
xAuthToken: string
                    
                };
GetClientDataForUpload: {
                    id: number
protocol: string
relativePath: string
xAuthToken: string
                    
                };
SumFeature: {
                    num1: number
num2: number
                    
                };
    }

export type ProtectedData = {
        ListMessages: {
                    id: number
xAuthToken: string
                    
                };
CreateConversation: {
                    conversationTitle: string
id: number
xAuthToken: string
                    
                };
ListConversations: {
                    id: number
xAuthToken: string
                    
                };
GetClientDataForDownload: {
                    id: number
protocol: string
relativePath: string
xAuthToken: string
                    
                };
CreateDefaultData: {
                    clientSub: string
llmName: string
xAuthToken: string
                    
                };
CreateMessage: {
                    id: number
requestBody: Array<BaseMessageContent>
senderType: string
threadId?: number | null
xAuthToken: string
                    
                };
CreateResearchContext: {
                    clientSub?: string | null
externalId: string
llmName?: string | null
requestBody: Array<number>
researchContextDescription: string
researchContextTitle: string
xAuthToken: string
                    
                };
ExtendResearchContext: {
                    clientSub: string
existingResearchContextId: number
externalId: string
llmName: string
newResearchContextDescription: string
newResearchContextTitle: string
requestBody: Array<number>
xAuthToken: string
                    
                };
ListSourceData: {
                    id: number | null
xAuthToken: string
                    
                };
RegisterSourceData: {
                    id: number
sourceDataName: string
sourceDataProtocol: string
sourceDataRelativePath: string
xAuthToken: string
                    
                };
ListResearchContexts: {
                    id: number
xAuthToken: string
                    
                };
ListSourceDataForResearchContext: {
                    id: number
xAuthToken: string
                    
                };
GetClientDataForUpload: {
                    id: number
protocol: string
relativePath: string
xAuthToken: string
                    
                };
    }

export type HealthCheckData = {
        
    }

export type CreateConversationData = {
        CreateConversation: {
                    conversationTitle: string
id: number
xAuthToken: string
                    
                };
    }

export type ListConversationsData = {
        ListConversations: {
                    id: number
xAuthToken: string
                    
                };
    }

export type GetClientDataForDownloadData = {
        GetClientDataForDownload: {
                    id: number
protocol: string
relativePath: string
xAuthToken: string
                    
                };
    }

export type CreateDefaultDataData = {
        CreateDefaultData: {
                    clientSub: string
llmName: string
xAuthToken: string
                    
                };
    }

export type CreateMessageData = {
        CreateMessage: {
                    id: number
requestBody: Array<BaseMessageContent>
senderType: string
threadId?: number | null
xAuthToken: string
                    
                };
    }

export type CreateResearchContextData = {
        CreateResearchContext: {
                    clientSub?: string | null
externalId: string
llmName?: string | null
requestBody: Array<number>
researchContextDescription: string
researchContextTitle: string
xAuthToken: string
                    
                };
    }

export type ExtendResearchContextData = {
        ExtendResearchContext: {
                    clientSub: string
existingResearchContextId: number
externalId: string
llmName: string
newResearchContextDescription: string
newResearchContextTitle: string
requestBody: Array<number>
xAuthToken: string
                    
                };
    }

export type ListSourceDataData = {
        ListSourceData: {
                    id: number | null
xAuthToken: string
                    
                };
    }

export type RegisterSourceDataData = {
        RegisterSourceData: {
                    id: number
sourceDataName: string
sourceDataProtocol: string
sourceDataRelativePath: string
xAuthToken: string
                    
                };
    }

export type ListResearchContextsData = {
        ListResearchContexts: {
                    id: number
xAuthToken: string
                    
                };
    }

export type ListSourceDataForResearchContextData = {
        ListSourceDataForResearchContext: {
                    id: number
xAuthToken: string
                    
                };
    }

export type GetClientDataForUploadData = {
        GetClientDataForUpload: {
                    id: number
protocol: string
relativePath: string
xAuthToken: string
                    
                };
    }

export type SumFeatureData = {
        SumFeature: {
                    num1: number
num2: number
                    
                };
    }

export type PublicData = {
        SumFeature: {
                    num1: number
num2: number
                    
                };
    }

export class ListMessagesService {

	/**
	 * List Messages
	 * List all messages in a conversation
	 * @returns ListMessagesViewModel_Input Success
	 * @throws ApiError
	 */
	public static listMessages(data: ListMessagesData['ListMessages']): CancelablePromise<ListMessagesViewModel_Input> {
		const {
id,
xAuthToken,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/conversations/{id}/message',
			path: {
				id
			},
			headers: {
				'x-auth-token': xAuthToken
			},
			errors: {
				400: `Bad Request.`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

}

export class ClientService {

	/**
	 * List Messages
	 * List all messages in a conversation
	 * @returns ListMessagesViewModel_Input Success
	 * @throws ApiError
	 */
	public static listMessages(data: ClientData['ListMessages']): CancelablePromise<ListMessagesViewModel_Input> {
		const {
id,
xAuthToken,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/conversations/{id}/message',
			path: {
				id
			},
			headers: {
				'x-auth-token': xAuthToken
			},
			errors: {
				400: `Bad Request.`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

	/**
	 * Create Conversation
	 * Create a new conversation in a research context
	 * @returns NewConversationViewModel Success
	 * @throws ApiError
	 */
	public static createConversation(data: ClientData['CreateConversation']): CancelablePromise<NewConversationViewModel> {
		const {
id,
conversationTitle,
xAuthToken,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/research-context/{id}/conversation',
			path: {
				id
			},
			headers: {
				'x-auth-token': xAuthToken
			},
			query: {
				conversation_title: conversationTitle
			},
			errors: {
				400: `Bad Request.`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

	/**
	 * List Conversations
	 * List all conversations in a research context
	 * @returns ListConversationsViewModel Success
	 * @throws ApiError
	 */
	public static listConversations(data: ClientData['ListConversations']): CancelablePromise<ListConversationsViewModel> {
		const {
id,
xAuthToken,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/research-context/{id}/conversation',
			path: {
				id
			},
			headers: {
				'x-auth-token': xAuthToken
			},
			errors: {
				400: `Bad Request. Research Context ID does not exist`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

	/**
	 * Get Client Data For Download
	 * Get the data required to download a file from one of the storage services
	 * @returns GetClientDataForDownloadViewModel Success
	 * @throws ApiError
	 */
	public static getClientDataForDownload(data: ClientData['GetClientDataForDownload']): CancelablePromise<GetClientDataForDownloadViewModel> {
		const {
id,
protocol,
relativePath,
xAuthToken,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/client/{id}/download-credentials',
			path: {
				id
			},
			headers: {
				'x-auth-token': xAuthToken
			},
			query: {
				protocol, relative_path: relativePath
			},
			errors: {
				400: `Bad Request.`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

	/**
	 * Create Default Data
	 * Create default data for testing: one user with a hard-coded SUB; one llm with a hardcoded name. This is meant to be executed first to setup the necessary components to (1) register new source data, (2) create a new research context selecting from the available source data
	 * @returns CreateDefaultDataViewModel Success
	 * @throws ApiError
	 */
	public static createDefaultData(data: ClientData['CreateDefaultData']): CancelablePromise<CreateDefaultDataViewModel> {
		const {
clientSub,
llmName,
xAuthToken,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/populate',
			headers: {
				'x-auth-token': xAuthToken
			},
			query: {
				client_sub: clientSub, llm_name: llmName
			},
			errors: {
				400: `Bad Request.`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

	/**
	 * Create Message
	 * Create a new message in a conversation
	 * @returns NewMessageViewModel Success
	 * @throws ApiError
	 */
	public static createMessage(data: ClientData['CreateMessage']): CancelablePromise<NewMessageViewModel> {
		const {
id,
senderType,
xAuthToken,
requestBody,
threadId,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/conversation/{id}/message',
			path: {
				id
			},
			headers: {
				'x-auth-token': xAuthToken
			},
			query: {
				sender_type: senderType, thread_id: threadId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				400: `Bad Request.`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

	/**
	 * Create Research Context
	 * Create a new research context from a subset of the available source data for a client
	 * @returns NewResearchContextViewModel Success
	 * @throws ApiError
	 */
	public static createResearchContext(data: ClientData['CreateResearchContext']): CancelablePromise<NewResearchContextViewModel> {
		const {
researchContextTitle,
researchContextDescription,
externalId,
xAuthToken,
requestBody,
clientSub,
llmName,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/research-context',
			headers: {
				'x-auth-token': xAuthToken
			},
			query: {
				research_context_title: researchContextTitle, research_context_description: researchContextDescription, external_id: externalId, client_sub: clientSub, llm_name: llmName
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				400: `Bad Request.`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

	/**
	 * Extend Research Context
	 * Create a new research context incorporating source data from an existing context with new source data from the client
	 * @returns NewResearchContextViewModel Success
	 * @throws ApiError
	 */
	public static extendResearchContext(data: ClientData['ExtendResearchContext']): CancelablePromise<NewResearchContextViewModel> {
		const {
newResearchContextTitle,
newResearchContextDescription,
existingResearchContextId,
clientSub,
llmName,
externalId,
xAuthToken,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/research-context/extend',
			headers: {
				'x-auth-token': xAuthToken
			},
			query: {
				new_research_context_title: newResearchContextTitle, new_research_context_description: newResearchContextDescription, existing_research_context_id: existingResearchContextId, client_sub: clientSub, llm_name: llmName, external_id: externalId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				400: `Bad Request.`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

	/**
	 * List Source Data
	 * List all source data registered in the database for a given Client
	 * @returns ListSourceDataViewModel_Input Success
	 * @throws ApiError
	 */
	public static listSourceData(data: ClientData['ListSourceData']): CancelablePromise<ListSourceDataViewModel_Input> {
		const {
id,
xAuthToken,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/client/{id}/source',
			path: {
				id
			},
			headers: {
				'x-auth-token': xAuthToken
			},
			errors: {
				400: `Bad Request.`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

	/**
	 * Register Source Data
	 * Register a new source data in the database
	 * @returns NewSourceDataViewModel_Input Success
	 * @throws ApiError
	 */
	public static registerSourceData(data: ClientData['RegisterSourceData']): CancelablePromise<NewSourceDataViewModel_Input> {
		const {
id,
sourceDataName,
sourceDataRelativePath,
sourceDataProtocol,
xAuthToken,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/client/{id}/source',
			path: {
				id
			},
			headers: {
				'x-auth-token': xAuthToken
			},
			query: {
				source_data_name: sourceDataName, source_data_relative_path: sourceDataRelativePath, source_data_protocol: sourceDataProtocol
			},
			errors: {
				400: `Bad Request. Research Context ID does not exist`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

	/**
	 * List Research Contexts
	 * List all research contexts in the database for a given user
	 * @returns ListResearchContextsViewModel Success
	 * @throws ApiError
	 */
	public static listResearchContexts(data: ClientData['ListResearchContexts']): CancelablePromise<ListResearchContextsViewModel> {
		const {
id,
xAuthToken,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/client/{id}/research-context',
			path: {
				id
			},
			headers: {
				'x-auth-token': xAuthToken
			},
			errors: {
				400: `Bad Request. Client ID does not exist`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

	/**
	 * List Source Data For Research Context
	 * List all source data registered in the database for a given research context
	 * @returns ListSourceDataForResearchContextViewModel_Input Success
	 * @throws ApiError
	 */
	public static listSourceDataForResearchContext(data: ClientData['ListSourceDataForResearchContext']): CancelablePromise<ListSourceDataForResearchContextViewModel_Input> {
		const {
id,
xAuthToken,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/research-context/{id}/source',
			path: {
				id
			},
			headers: {
				'x-auth-token': xAuthToken
			},
			errors: {
				400: `Bad Request.`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

	/**
	 * Get Client Data For Upload
	 * Get the data required to upload a file to one of the storage services
	 * @returns GetClientDataForUploadViewModel Success
	 * @throws ApiError
	 */
	public static getClientDataForUpload(data: ClientData['GetClientDataForUpload']): CancelablePromise<GetClientDataForUploadViewModel> {
		const {
id,
protocol,
relativePath,
xAuthToken,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/client/{id}/upload-credentials',
			path: {
				id
			},
			headers: {
				'x-auth-token': xAuthToken
			},
			query: {
				protocol, relative_path: relativePath
			},
			errors: {
				400: `Bad Request.`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

	/**
	 * Sum Feature
	 * Adds 2 numbers
	 * @returns DemoViewModel Success
	 * @throws ApiError
	 */
	public static sumFeature(data: ClientData['SumFeature']): CancelablePromise<DemoViewModel> {
		const {
num1,
num2,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/sum',
			query: {
				num1, num2
			},
			errors: {
				400: `Bad Request`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

}

export class ProtectedService {

	/**
	 * List Messages
	 * List all messages in a conversation
	 * @returns ListMessagesViewModel_Input Success
	 * @throws ApiError
	 */
	public static listMessages(data: ProtectedData['ListMessages']): CancelablePromise<ListMessagesViewModel_Input> {
		const {
id,
xAuthToken,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/conversations/{id}/message',
			path: {
				id
			},
			headers: {
				'x-auth-token': xAuthToken
			},
			errors: {
				400: `Bad Request.`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

	/**
	 * Create Conversation
	 * Create a new conversation in a research context
	 * @returns NewConversationViewModel Success
	 * @throws ApiError
	 */
	public static createConversation(data: ProtectedData['CreateConversation']): CancelablePromise<NewConversationViewModel> {
		const {
id,
conversationTitle,
xAuthToken,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/research-context/{id}/conversation',
			path: {
				id
			},
			headers: {
				'x-auth-token': xAuthToken
			},
			query: {
				conversation_title: conversationTitle
			},
			errors: {
				400: `Bad Request.`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

	/**
	 * List Conversations
	 * List all conversations in a research context
	 * @returns ListConversationsViewModel Success
	 * @throws ApiError
	 */
	public static listConversations(data: ProtectedData['ListConversations']): CancelablePromise<ListConversationsViewModel> {
		const {
id,
xAuthToken,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/research-context/{id}/conversation',
			path: {
				id
			},
			headers: {
				'x-auth-token': xAuthToken
			},
			errors: {
				400: `Bad Request. Research Context ID does not exist`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

	/**
	 * Get Client Data For Download
	 * Get the data required to download a file from one of the storage services
	 * @returns GetClientDataForDownloadViewModel Success
	 * @throws ApiError
	 */
	public static getClientDataForDownload(data: ProtectedData['GetClientDataForDownload']): CancelablePromise<GetClientDataForDownloadViewModel> {
		const {
id,
protocol,
relativePath,
xAuthToken,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/client/{id}/download-credentials',
			path: {
				id
			},
			headers: {
				'x-auth-token': xAuthToken
			},
			query: {
				protocol, relative_path: relativePath
			},
			errors: {
				400: `Bad Request.`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

	/**
	 * Create Default Data
	 * Create default data for testing: one user with a hard-coded SUB; one llm with a hardcoded name. This is meant to be executed first to setup the necessary components to (1) register new source data, (2) create a new research context selecting from the available source data
	 * @returns CreateDefaultDataViewModel Success
	 * @throws ApiError
	 */
	public static createDefaultData(data: ProtectedData['CreateDefaultData']): CancelablePromise<CreateDefaultDataViewModel> {
		const {
clientSub,
llmName,
xAuthToken,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/populate',
			headers: {
				'x-auth-token': xAuthToken
			},
			query: {
				client_sub: clientSub, llm_name: llmName
			},
			errors: {
				400: `Bad Request.`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

	/**
	 * Create Message
	 * Create a new message in a conversation
	 * @returns NewMessageViewModel Success
	 * @throws ApiError
	 */
	public static createMessage(data: ProtectedData['CreateMessage']): CancelablePromise<NewMessageViewModel> {
		const {
id,
senderType,
xAuthToken,
requestBody,
threadId,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/conversation/{id}/message',
			path: {
				id
			},
			headers: {
				'x-auth-token': xAuthToken
			},
			query: {
				sender_type: senderType, thread_id: threadId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				400: `Bad Request.`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

	/**
	 * Create Research Context
	 * Create a new research context from a subset of the available source data for a client
	 * @returns NewResearchContextViewModel Success
	 * @throws ApiError
	 */
	public static createResearchContext(data: ProtectedData['CreateResearchContext']): CancelablePromise<NewResearchContextViewModel> {
		const {
researchContextTitle,
researchContextDescription,
externalId,
xAuthToken,
requestBody,
clientSub,
llmName,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/research-context',
			headers: {
				'x-auth-token': xAuthToken
			},
			query: {
				research_context_title: researchContextTitle, research_context_description: researchContextDescription, external_id: externalId, client_sub: clientSub, llm_name: llmName
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				400: `Bad Request.`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

	/**
	 * Extend Research Context
	 * Create a new research context incorporating source data from an existing context with new source data from the client
	 * @returns NewResearchContextViewModel Success
	 * @throws ApiError
	 */
	public static extendResearchContext(data: ProtectedData['ExtendResearchContext']): CancelablePromise<NewResearchContextViewModel> {
		const {
newResearchContextTitle,
newResearchContextDescription,
existingResearchContextId,
clientSub,
llmName,
externalId,
xAuthToken,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/research-context/extend',
			headers: {
				'x-auth-token': xAuthToken
			},
			query: {
				new_research_context_title: newResearchContextTitle, new_research_context_description: newResearchContextDescription, existing_research_context_id: existingResearchContextId, client_sub: clientSub, llm_name: llmName, external_id: externalId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				400: `Bad Request.`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

	/**
	 * List Source Data
	 * List all source data registered in the database for a given Client
	 * @returns ListSourceDataViewModel_Input Success
	 * @throws ApiError
	 */
	public static listSourceData(data: ProtectedData['ListSourceData']): CancelablePromise<ListSourceDataViewModel_Input> {
		const {
id,
xAuthToken,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/client/{id}/source',
			path: {
				id
			},
			headers: {
				'x-auth-token': xAuthToken
			},
			errors: {
				400: `Bad Request.`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

	/**
	 * Register Source Data
	 * Register a new source data in the database
	 * @returns NewSourceDataViewModel_Input Success
	 * @throws ApiError
	 */
	public static registerSourceData(data: ProtectedData['RegisterSourceData']): CancelablePromise<NewSourceDataViewModel_Input> {
		const {
id,
sourceDataName,
sourceDataRelativePath,
sourceDataProtocol,
xAuthToken,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/client/{id}/source',
			path: {
				id
			},
			headers: {
				'x-auth-token': xAuthToken
			},
			query: {
				source_data_name: sourceDataName, source_data_relative_path: sourceDataRelativePath, source_data_protocol: sourceDataProtocol
			},
			errors: {
				400: `Bad Request. Research Context ID does not exist`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

	/**
	 * List Research Contexts
	 * List all research contexts in the database for a given user
	 * @returns ListResearchContextsViewModel Success
	 * @throws ApiError
	 */
	public static listResearchContexts(data: ProtectedData['ListResearchContexts']): CancelablePromise<ListResearchContextsViewModel> {
		const {
id,
xAuthToken,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/client/{id}/research-context',
			path: {
				id
			},
			headers: {
				'x-auth-token': xAuthToken
			},
			errors: {
				400: `Bad Request. Client ID does not exist`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

	/**
	 * List Source Data For Research Context
	 * List all source data registered in the database for a given research context
	 * @returns ListSourceDataForResearchContextViewModel_Input Success
	 * @throws ApiError
	 */
	public static listSourceDataForResearchContext(data: ProtectedData['ListSourceDataForResearchContext']): CancelablePromise<ListSourceDataForResearchContextViewModel_Input> {
		const {
id,
xAuthToken,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/research-context/{id}/source',
			path: {
				id
			},
			headers: {
				'x-auth-token': xAuthToken
			},
			errors: {
				400: `Bad Request.`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

	/**
	 * Get Client Data For Upload
	 * Get the data required to upload a file to one of the storage services
	 * @returns GetClientDataForUploadViewModel Success
	 * @throws ApiError
	 */
	public static getClientDataForUpload(data: ProtectedData['GetClientDataForUpload']): CancelablePromise<GetClientDataForUploadViewModel> {
		const {
id,
protocol,
relativePath,
xAuthToken,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/client/{id}/upload-credentials',
			path: {
				id
			},
			headers: {
				'x-auth-token': xAuthToken
			},
			query: {
				protocol, relative_path: relativePath
			},
			errors: {
				400: `Bad Request.`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

}

export class HealthCheckService {

	/**
	 * Health Check
	 * Checks if Kernel Planchester is alive
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static healthCheck(): CancelablePromise<unknown> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/ping',
		});
	}

}

export class CreateConversationService {

	/**
	 * Create Conversation
	 * Create a new conversation in a research context
	 * @returns NewConversationViewModel Success
	 * @throws ApiError
	 */
	public static createConversation(data: CreateConversationData['CreateConversation']): CancelablePromise<NewConversationViewModel> {
		const {
id,
conversationTitle,
xAuthToken,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/research-context/{id}/conversation',
			path: {
				id
			},
			headers: {
				'x-auth-token': xAuthToken
			},
			query: {
				conversation_title: conversationTitle
			},
			errors: {
				400: `Bad Request.`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

}

export class ListConversationsService {

	/**
	 * List Conversations
	 * List all conversations in a research context
	 * @returns ListConversationsViewModel Success
	 * @throws ApiError
	 */
	public static listConversations(data: ListConversationsData['ListConversations']): CancelablePromise<ListConversationsViewModel> {
		const {
id,
xAuthToken,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/research-context/{id}/conversation',
			path: {
				id
			},
			headers: {
				'x-auth-token': xAuthToken
			},
			errors: {
				400: `Bad Request. Research Context ID does not exist`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

}

export class GetClientDataForDownloadService {

	/**
	 * Get Client Data For Download
	 * Get the data required to download a file from one of the storage services
	 * @returns GetClientDataForDownloadViewModel Success
	 * @throws ApiError
	 */
	public static getClientDataForDownload(data: GetClientDataForDownloadData['GetClientDataForDownload']): CancelablePromise<GetClientDataForDownloadViewModel> {
		const {
id,
protocol,
relativePath,
xAuthToken,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/client/{id}/download-credentials',
			path: {
				id
			},
			headers: {
				'x-auth-token': xAuthToken
			},
			query: {
				protocol, relative_path: relativePath
			},
			errors: {
				400: `Bad Request.`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

}

export class CreateDefaultDataService {

	/**
	 * Create Default Data
	 * Create default data for testing: one user with a hard-coded SUB; one llm with a hardcoded name. This is meant to be executed first to setup the necessary components to (1) register new source data, (2) create a new research context selecting from the available source data
	 * @returns CreateDefaultDataViewModel Success
	 * @throws ApiError
	 */
	public static createDefaultData(data: CreateDefaultDataData['CreateDefaultData']): CancelablePromise<CreateDefaultDataViewModel> {
		const {
clientSub,
llmName,
xAuthToken,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/populate',
			headers: {
				'x-auth-token': xAuthToken
			},
			query: {
				client_sub: clientSub, llm_name: llmName
			},
			errors: {
				400: `Bad Request.`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

}

export class CreateMessageService {

	/**
	 * Create Message
	 * Create a new message in a conversation
	 * @returns NewMessageViewModel Success
	 * @throws ApiError
	 */
	public static createMessage(data: CreateMessageData['CreateMessage']): CancelablePromise<NewMessageViewModel> {
		const {
id,
senderType,
xAuthToken,
requestBody,
threadId,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/conversation/{id}/message',
			path: {
				id
			},
			headers: {
				'x-auth-token': xAuthToken
			},
			query: {
				sender_type: senderType, thread_id: threadId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				400: `Bad Request.`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

}

export class CreateResearchContextService {

	/**
	 * Create Research Context
	 * Create a new research context from a subset of the available source data for a client
	 * @returns NewResearchContextViewModel Success
	 * @throws ApiError
	 */
	public static createResearchContext(data: CreateResearchContextData['CreateResearchContext']): CancelablePromise<NewResearchContextViewModel> {
		const {
researchContextTitle,
researchContextDescription,
externalId,
xAuthToken,
requestBody,
clientSub,
llmName,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/research-context',
			headers: {
				'x-auth-token': xAuthToken
			},
			query: {
				research_context_title: researchContextTitle, research_context_description: researchContextDescription, external_id: externalId, client_sub: clientSub, llm_name: llmName
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				400: `Bad Request.`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

}

export class ExtendResearchContextService {

	/**
	 * Extend Research Context
	 * Create a new research context incorporating source data from an existing context with new source data from the client
	 * @returns NewResearchContextViewModel Success
	 * @throws ApiError
	 */
	public static extendResearchContext(data: ExtendResearchContextData['ExtendResearchContext']): CancelablePromise<NewResearchContextViewModel> {
		const {
newResearchContextTitle,
newResearchContextDescription,
existingResearchContextId,
clientSub,
llmName,
externalId,
xAuthToken,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/research-context/extend',
			headers: {
				'x-auth-token': xAuthToken
			},
			query: {
				new_research_context_title: newResearchContextTitle, new_research_context_description: newResearchContextDescription, existing_research_context_id: existingResearchContextId, client_sub: clientSub, llm_name: llmName, external_id: externalId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				400: `Bad Request.`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

}

export class ListSourceDataService {

	/**
	 * List Source Data
	 * List all source data registered in the database for a given Client
	 * @returns ListSourceDataViewModel_Input Success
	 * @throws ApiError
	 */
	public static listSourceData(data: ListSourceDataData['ListSourceData']): CancelablePromise<ListSourceDataViewModel_Input> {
		const {
id,
xAuthToken,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/client/{id}/source',
			path: {
				id
			},
			headers: {
				'x-auth-token': xAuthToken
			},
			errors: {
				400: `Bad Request.`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

}

export class RegisterSourceDataService {

	/**
	 * Register Source Data
	 * Register a new source data in the database
	 * @returns NewSourceDataViewModel_Input Success
	 * @throws ApiError
	 */
	public static registerSourceData(data: RegisterSourceDataData['RegisterSourceData']): CancelablePromise<NewSourceDataViewModel_Input> {
		const {
id,
sourceDataName,
sourceDataRelativePath,
sourceDataProtocol,
xAuthToken,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/client/{id}/source',
			path: {
				id
			},
			headers: {
				'x-auth-token': xAuthToken
			},
			query: {
				source_data_name: sourceDataName, source_data_relative_path: sourceDataRelativePath, source_data_protocol: sourceDataProtocol
			},
			errors: {
				400: `Bad Request. Research Context ID does not exist`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

}

export class ListResearchContextsService {

	/**
	 * List Research Contexts
	 * List all research contexts in the database for a given user
	 * @returns ListResearchContextsViewModel Success
	 * @throws ApiError
	 */
	public static listResearchContexts(data: ListResearchContextsData['ListResearchContexts']): CancelablePromise<ListResearchContextsViewModel> {
		const {
id,
xAuthToken,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/client/{id}/research-context',
			path: {
				id
			},
			headers: {
				'x-auth-token': xAuthToken
			},
			errors: {
				400: `Bad Request. Client ID does not exist`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

}

export class ListSourceDataForResearchContextService {

	/**
	 * List Source Data For Research Context
	 * List all source data registered in the database for a given research context
	 * @returns ListSourceDataForResearchContextViewModel_Input Success
	 * @throws ApiError
	 */
	public static listSourceDataForResearchContext(data: ListSourceDataForResearchContextData['ListSourceDataForResearchContext']): CancelablePromise<ListSourceDataForResearchContextViewModel_Input> {
		const {
id,
xAuthToken,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/research-context/{id}/source',
			path: {
				id
			},
			headers: {
				'x-auth-token': xAuthToken
			},
			errors: {
				400: `Bad Request.`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

}

export class GetClientDataForUploadService {

	/**
	 * Get Client Data For Upload
	 * Get the data required to upload a file to one of the storage services
	 * @returns GetClientDataForUploadViewModel Success
	 * @throws ApiError
	 */
	public static getClientDataForUpload(data: GetClientDataForUploadData['GetClientDataForUpload']): CancelablePromise<GetClientDataForUploadViewModel> {
		const {
id,
protocol,
relativePath,
xAuthToken,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/client/{id}/upload-credentials',
			path: {
				id
			},
			headers: {
				'x-auth-token': xAuthToken
			},
			query: {
				protocol, relative_path: relativePath
			},
			errors: {
				400: `Bad Request.`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

}

export class SumFeatureService {

	/**
	 * Sum Feature
	 * Adds 2 numbers
	 * @returns DemoViewModel Success
	 * @throws ApiError
	 */
	public static sumFeature(data: SumFeatureData['SumFeature']): CancelablePromise<DemoViewModel> {
		const {
num1,
num2,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/sum',
			query: {
				num1, num2
			},
			errors: {
				400: `Bad Request`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

}

export class PublicService {

	/**
	 * Sum Feature
	 * Adds 2 numbers
	 * @returns DemoViewModel Success
	 * @throws ApiError
	 */
	public static sumFeature(data: PublicData['SumFeature']): CancelablePromise<DemoViewModel> {
		const {
num1,
num2,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/sum',
			query: {
				num1, num2
			},
			errors: {
				400: `Bad Request`,
				422: `Validation Error`,
				500: `Internal Server Error`,
			},
		});
	}

}