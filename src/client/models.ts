/**
 * Represents a conversation between a user and an agent, within in a research context
 * This is where messages will be exchanged
 * 
 * @param id: the id of the conversation
 * @param title: the title of the conversation
 */
export type Conversation = {
	created_at: string;
	updated_at: string;
	deleted: boolean;
	deleted_at: string | null;
	id: number;
	title: string;
};



/**
 * View Model for the Create Default Data Feature. Represents a new default client and a new default llm.
 */
export type CreateDefaultDataViewModel = {
	status: boolean;
	code: number;
	errorCode?: number | null;
	errorMessage?: string | null;
	errorName?: string | null;
	errorType?: string | null;
	/**
	 * Client id of the new default client.
	 */
	client_id: number;
	/**
	 * LLM id of the new default llm.
	 */
	llm_id: number;
};



export type DemoViewModel = {
	status: boolean;
	code: number;
	errorCode?: number | null;
	errorMessage?: string | null;
	errorName?: string | null;
	errorType?: string | null;
	/**
	 * Sum of the numbers
	 */
	sum: number;
};



/**
 * View Model for the Download File Feature.
 */
export type GetClientDataForDownloadViewModel = {
	status: boolean;
	code: number;
	errorCode?: number | null;
	errorMessage?: string | null;
	errorName?: string | null;
	errorType?: string | null;
	/**
	 * The signed URL to download the file.
	 */
	signed_url: string;
};



/**
 * View Model for the Get Client Data For Upload Feature.
 */
export type GetClientDataForUploadViewModel = {
	status: boolean;
	code: number;
	errorCode?: number | null;
	errorMessage?: string | null;
	errorName?: string | null;
	errorType?: string | null;
	/**
	 * The signed URL to upload the file.
	 */
	signed_url: string;
};



export type HTTPValidationError = {
	detail?: Array<ValidationError>;
};



/**
 * View Model for the List Conversations Feature. Represents all conversations in a given research context.
 */
export type ListConversationsViewModel = {
	status: boolean;
	code: number;
	errorCode?: number | null;
	errorMessage?: string | null;
	errorName?: string | null;
	errorType?: string | null;
	/**
	 * Research context id for which the conversations are to be listed.
	 */
	research_context_id: number;
	/**
	 * List of conversations in the research context.
	 */
	conversations: Array<Conversation>;
};



/**
 * View Model for the List Messages Feature. Represents all messages in the database for a given conversation.
 */
export type ListMessagesViewModel_Input = {
	status: boolean;
	code: number;
	errorCode?: number | null;
	errorMessage?: string | null;
	errorName?: string | null;
	errorType?: string | null;
	/**
	 * List of all messages in the database for a given conversation.
	 */
	message_list: Array<MessageBase>;
};



/**
 * View Model for the List Messages Feature. Represents all messages in the database for a given conversation.
 */
export type ListMessagesViewModel_Output = {
	status: boolean;
	code: number;
	errorCode?: number | null;
	errorMessage?: string | null;
	errorName?: string | null;
	errorType?: string | null;
	/**
	 * List of all messages in the database for a given conversation.
	 */
	message_list: Array<MessageBase>;
};



export type ListResearchContextsViewModel = {
	status: boolean;
	code: number;
	errorCode?: number | null;
	errorMessage?: string | null;
	errorName?: string | null;
	errorType?: string | null;
	/**
	 * Client ID for which the research contexts are to be listed.
	 */
	client_id: number;
	/**
	 * List of research contexts for the client.
	 */
	research_contexts: Array<ResearchContext>;
};



/**
 * View Model for the List Source Data For Research Context Feature. Represents all source data in the database for a given research context.
 */
export type ListSourceDataForResearchContextViewModel_Input = {
	status: boolean;
	code: number;
	errorCode?: number | null;
	errorMessage?: string | null;
	errorName?: string | null;
	errorType?: string | null;
	/**
	 * List of source data in the database for a given research context.
	 */
	source_data_list: Array<SourceData>;
};



/**
 * View Model for the List Source Data For Research Context Feature. Represents all source data in the database for a given research context.
 */
export type ListSourceDataForResearchContextViewModel_Output = {
	status: boolean;
	code: number;
	errorCode?: number | null;
	errorMessage?: string | null;
	errorName?: string | null;
	errorType?: string | null;
	/**
	 * List of source data in the database for a given research context.
	 */
	source_data_list: Array<SourceData>;
};



/**
 * View Model for the List Source Data Feature. Represents all source data in the database if no client_id was passed, or all source data for a given client_id if it was provided as a parameter.
 */
export type ListSourceDataViewModel_Input = {
	status: boolean;
	code: number;
	errorCode?: number | null;
	errorMessage?: string | null;
	errorName?: string | null;
	errorType?: string | null;
	/**
	 * List of source data in the database.
	 */
	source_data_list: Array<SourceData>;
};



/**
 * View Model for the List Source Data Feature. Represents all source data in the database if no client_id was passed, or all source data for a given client_id if it was provided as a parameter.
 */
export type ListSourceDataViewModel_Output = {
	status: boolean;
	code: number;
	errorCode?: number | null;
	errorMessage?: string | null;
	errorName?: string | null;
	errorType?: string | null;
	/**
	 * List of source data in the database.
	 */
	source_data_list: Array<SourceData>;
};



/**
 * Base class for user queries and agent responses
 * 
 * @param id: the id of the message
 * @type id: int
 * @param content: the content of the message
 * @type content: str
 * @param timestamp: the datetime when the message was sent
 * @type timestamp: datetime
 * @param sender: the name of the sender of the message
 * @type sender: str
 * @param sender_type: the type of the sender of the message
 * @type sender_type: MessageSenderTypeEnum
 */
export type MessageBase = {
	created_at: string;
	updated_at: string;
	deleted: boolean;
	deleted_at: string | null;
	id: number;
	content: string;
	timestamp: string;
	sender: string;
	sender_type: MessageSenderTypeEnum;
};



/**
 * Enum for the different types of sender of messages
 * 
 * USER: the sender is a user
 * AGENT: the sender is an agent
 */
export type MessageSenderTypeEnum = 'user' | 'agent';



/**
 * View Model for the New Conversation Feature.
 */
export type NewConversationViewModel = {
	status: boolean;
	code: number;
	errorCode?: number | null;
	errorMessage?: string | null;
	errorName?: string | null;
	errorType?: string | null;
	/**
	 * ID of the newly created conversation.
	 */
	conversation_id: number;
};



/**
 * View Model for the New Message Feature.
 */
export type NewMessageViewModel = {
	status: boolean;
	code: number;
	errorCode?: number | null;
	errorMessage?: string | null;
	errorName?: string | null;
	errorType?: string | null;
	/**
	 * ID of the newly created message.
	 */
	message_id: number;
};



/**
 * View Model for the New Research Context Feature.
 */
export type NewResearchContextViewModel = {
	status: boolean;
	code: number;
	errorCode?: number | null;
	errorMessage?: string | null;
	errorName?: string | null;
	errorType?: string | null;
	/**
	 * ID of the newly created research context.
	 */
	research_context_id: number;
	/**
	 * Title of the newly created research context.
	 */
	research_context_title: string;
	/**
	 * Description of the newly created research context.
	 */
	research_context_description: string;
	/**
	 * Name of the LLM of the newly created research context.
	 */
	llm_name: string;
};



/**
 * View Model for the New Source Data Feature.
 */
export type NewSourceDataViewModel_Input = {
	status: boolean;
	code: number;
	errorCode?: number | null;
	errorMessage?: string | null;
	errorName?: string | null;
	errorType?: string | null;
	/**
	 * The source data object containing the metadata of the registered file.
	 */
	source_data: SourceData | null;
};



/**
 * View Model for the New Source Data Feature.
 */
export type NewSourceDataViewModel_Output = {
	status: boolean;
	code: number;
	errorCode?: number | null;
	errorMessage?: string | null;
	errorName?: string | null;
	errorType?: string | null;
	/**
	 * The source data object containing the metadata of the registered file.
	 */
	source_data: SourceData | null;
};



/**
 * Enum for the different protocols that can be used to store a source_data.
 * 
 * S3: the source_data is stored in an S3 bucket
 * NAS: the source_data is stored in a NAS
 * LOCAL: the source_data is stored locally
 */
export type ProtocolEnum = 's3' | 'nas' | 'local';



/**
 * A research context belongs to a research topic, and is defined using a subset of the collection of source_data of the research topic
 * This is the context in which conversations will happen
 * 
 * @param id: the id of the research context
 * @param title: the title of the research context
 * @param description: the description of the research context
 */
export type ResearchContext = {
	created_at: string;
	updated_at: string;
	deleted: boolean;
	deleted_at: string | null;
	id: number;
	title: string;
	description: string;
};



/**
 * Represents a source_data or a file
 * 
 * @param id: the id of the source_data
 * @param name: the name of the source_data
 * @param relative_path: the relative path of the source_data
 * @param type: the type of the source_data (e.g., txt, pdf, csv, etc.); inferred from the extension of the relative_path
 * @param protocol: the protocol used to store the source_data
 * @param status: the status of the source_data
 */
export type SourceData = {
	created_at: string;
	updated_at: string;
	deleted: boolean;
	deleted_at: string | null;
	id: number;
	name: string;
	relative_path: string;
	type: string;
	protocol: ProtocolEnum;
	status: SourceDataStatusEnum;
};



/**
 * Enum for the different status that a source data can have.
 * 
 * CREATED: the source data has been created
 * UNAVAILABLE: the source data is not available
 * AVAILABLE: the source data is available and part of a consistent dataset
 * INCONSISTENT_DATASET: the source data is available but part of an inconsistent dataset
 */
export type SourceDataStatusEnum = 'created' | 'unavailable' | 'available' | 'inconsistent_dataset';



export type ValidationError = {
	loc: Array<string | number>;
	msg: string;
	type: string;
};

