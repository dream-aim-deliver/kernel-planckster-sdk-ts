export const $Conversation = {
	description: `Represents a conversation between a user and an agent, within in a research context
This is where messages will be exchanged

@param id: the id of the conversation
@param title: the title of the conversation`,
	properties: {
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		deleted: {
	type: 'boolean',
	isRequired: true,
},
		deleted_at: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
	isRequired: true,
},
		id: {
	type: 'number',
	isRequired: true,
},
		title: {
	type: 'string',
	isRequired: true,
},
	},
} as const;

export const $CreateDefaultDataViewModel = {
	description: `View Model for the Create Default Data Feature. Represents a new default client and a new default llm.`,
	properties: {
		status: {
	type: 'boolean',
	isRequired: true,
},
		code: {
	type: 'number',
	isRequired: true,
},
		errorCode: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		errorMessage: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		errorName: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		errorType: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		client_id: {
	type: 'number',
	description: `Client id of the new default client.`,
	isRequired: true,
},
		llm_id: {
	type: 'number',
	description: `LLM id of the new default llm.`,
	isRequired: true,
},
	},
} as const;

export const $DemoViewModel = {
	properties: {
		status: {
	type: 'boolean',
	isRequired: true,
},
		code: {
	type: 'number',
	isRequired: true,
},
		errorCode: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		errorMessage: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		errorName: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		errorType: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		sum: {
	type: 'number',
	description: `Sum of the numbers`,
	isRequired: true,
},
	},
} as const;

export const $GetClientDataForDownloadViewModel = {
	description: `View Model for the Download File Feature.`,
	properties: {
		status: {
	type: 'boolean',
	isRequired: true,
},
		code: {
	type: 'number',
	isRequired: true,
},
		errorCode: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		errorMessage: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		errorName: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		errorType: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		signed_url: {
	type: 'string',
	description: `The signed URL to download the file.`,
	isRequired: true,
},
	},
} as const;

export const $GetClientDataForUploadViewModel = {
	description: `View Model for the Get Client Data For Upload Feature.`,
	properties: {
		status: {
	type: 'boolean',
	isRequired: true,
},
		code: {
	type: 'number',
	isRequired: true,
},
		errorCode: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		errorMessage: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		errorName: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		errorType: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		signed_url: {
	type: 'string',
	description: `The signed URL to upload the file.`,
	isRequired: true,
},
	},
} as const;

export const $HTTPValidationError = {
	properties: {
		detail: {
	type: 'array',
	contains: {
		type: 'ValidationError',
	},
},
	},
} as const;

export const $ListConversationsViewModel = {
	description: `View Model for the List Conversations Feature. Represents all conversations in a given research context.`,
	properties: {
		status: {
	type: 'boolean',
	isRequired: true,
},
		code: {
	type: 'number',
	isRequired: true,
},
		errorCode: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		errorMessage: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		errorName: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		errorType: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		research_context_id: {
	type: 'number',
	description: `Research context id for which the conversations are to be listed.`,
	isRequired: true,
},
		conversations: {
	type: 'array',
	contains: {
		type: 'Conversation',
	},
	isRequired: true,
},
	},
} as const;

export const $ListMessagesViewModel = {
	description: `View Model for the List Messages Feature. Represents all messages in the database for a given conversation.`,
	properties: {
		status: {
	type: 'boolean',
	isRequired: true,
},
		code: {
	type: 'number',
	isRequired: true,
},
		errorCode: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		errorMessage: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		errorName: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		errorType: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		message_list: {
	type: 'array',
	contains: {
	type: 'string',
},
	isRequired: true,
},
	},
} as const;

export const $ListResearchContextsViewModel = {
	properties: {
		status: {
	type: 'boolean',
	isRequired: true,
},
		code: {
	type: 'number',
	isRequired: true,
},
		errorCode: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		errorMessage: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		errorName: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		errorType: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		client_id: {
	type: 'number',
	description: `Client ID for which the research contexts are to be listed.`,
	isRequired: true,
},
		research_contexts: {
	type: 'array',
	contains: {
		type: 'ResearchContext',
	},
	isRequired: true,
},
	},
} as const;

export const $ListSourceDataForResearchContextViewModel_Input = {
	description: `View Model for the List Source Data For Research Context Feature. Represents all source data in the database for a given research context.`,
	properties: {
		status: {
	type: 'boolean',
	isRequired: true,
},
		code: {
	type: 'number',
	isRequired: true,
},
		errorCode: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		errorMessage: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		errorName: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		errorType: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		source_data_list: {
	type: 'array',
	contains: {
		type: 'SourceData',
	},
	isRequired: true,
},
	},
} as const;

export const $ListSourceDataForResearchContextViewModel_Output = {
	description: `View Model for the List Source Data For Research Context Feature. Represents all source data in the database for a given research context.`,
	properties: {
		status: {
	type: 'boolean',
	isRequired: true,
},
		code: {
	type: 'number',
	isRequired: true,
},
		errorCode: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		errorMessage: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		errorName: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		errorType: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		source_data_list: {
	type: 'array',
	contains: {
		type: 'SourceData',
	},
	isRequired: true,
},
	},
} as const;

export const $ListSourceDataViewModel_Input = {
	description: `View Model for the List Source Data Feature. Represents all source data in the database if no client_id was passed, or all source data for a given client_id if it was provided as a parameter.`,
	properties: {
		status: {
	type: 'boolean',
	isRequired: true,
},
		code: {
	type: 'number',
	isRequired: true,
},
		errorCode: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		errorMessage: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		errorName: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		errorType: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		source_data_list: {
	type: 'array',
	contains: {
		type: 'SourceData',
	},
	isRequired: true,
},
	},
} as const;

export const $ListSourceDataViewModel_Output = {
	description: `View Model for the List Source Data Feature. Represents all source data in the database if no client_id was passed, or all source data for a given client_id if it was provided as a parameter.`,
	properties: {
		status: {
	type: 'boolean',
	isRequired: true,
},
		code: {
	type: 'number',
	isRequired: true,
},
		errorCode: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		errorMessage: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		errorName: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		errorType: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		source_data_list: {
	type: 'array',
	contains: {
		type: 'SourceData',
	},
	isRequired: true,
},
	},
} as const;

export const $NewConversationViewModel = {
	description: `View Model for the New Conversation Feature.`,
	properties: {
		status: {
	type: 'boolean',
	isRequired: true,
},
		code: {
	type: 'number',
	isRequired: true,
},
		errorCode: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		errorMessage: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		errorName: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		errorType: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		conversation_id: {
	type: 'number',
	description: `ID of the newly created conversation.`,
	isRequired: true,
},
	},
} as const;

export const $NewMessageViewModel = {
	description: `View Model for the New Message Feature.`,
	properties: {
		status: {
	type: 'boolean',
	isRequired: true,
},
		code: {
	type: 'number',
	isRequired: true,
},
		errorCode: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		errorMessage: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		errorName: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		errorType: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		message_id: {
	type: 'number',
	description: `ID of the newly created message.`,
	isRequired: true,
},
	},
} as const;

export const $NewResearchContextViewModel = {
	description: `View Model for the New Research Context Feature.`,
	properties: {
		status: {
	type: 'boolean',
	isRequired: true,
},
		code: {
	type: 'number',
	isRequired: true,
},
		errorCode: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		errorMessage: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		errorName: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		errorType: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		research_context_id: {
	type: 'number',
	description: `ID of the newly created research context.`,
	isRequired: true,
},
		research_context_title: {
	type: 'string',
	description: `Title of the newly created research context.`,
	isRequired: true,
},
		research_context_description: {
	type: 'string',
	description: `Description of the newly created research context.`,
	isRequired: true,
},
		llm_name: {
	type: 'string',
	description: `Name of the LLM of the newly created research context.`,
	isRequired: true,
},
	},
} as const;

export const $NewSourceDataViewModel_Input = {
	description: `View Model for the New Source Data Feature.`,
	properties: {
		status: {
	type: 'boolean',
	isRequired: true,
},
		code: {
	type: 'number',
	isRequired: true,
},
		errorCode: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		errorMessage: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		errorName: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		errorType: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		source_data: {
	type: 'any-of',
	description: `The source data object containing the metadata of the registered file.`,
	contains: [{
	type: 'SourceData',
}, {
	type: 'null',
}],
	isRequired: true,
},
	},
} as const;

export const $NewSourceDataViewModel_Output = {
	description: `View Model for the New Source Data Feature.`,
	properties: {
		status: {
	type: 'boolean',
	isRequired: true,
},
		code: {
	type: 'number',
	isRequired: true,
},
		errorCode: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		errorMessage: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		errorName: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		errorType: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		source_data: {
	type: 'any-of',
	description: `The source data object containing the metadata of the registered file.`,
	contains: [{
	type: 'SourceData',
}, {
	type: 'null',
}],
	isRequired: true,
},
	},
} as const;

export const $ProtocolEnum = {
	type: 'Enum',
	enum: ['s3','nas','local',],
} as const;

export const $ResearchContext = {
	description: `A research context belongs to a research topic, and is defined using a subset of the collection of source_data of the research topic
This is the context in which conversations will happen

@param id: the id of the research context
@param title: the title of the research context
@param description: the description of the research context`,
	properties: {
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		deleted: {
	type: 'boolean',
	isRequired: true,
},
		deleted_at: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
	isRequired: true,
},
		id: {
	type: 'number',
	isRequired: true,
},
		title: {
	type: 'string',
	isRequired: true,
},
		description: {
	type: 'string',
	isRequired: true,
},
	},
} as const;

export const $SourceData = {
	description: `Represents a source_data or a file

@param id: the id of the source_data
@param name: the name of the source_data
@param relative_path: the relative path of the source_data
@param type: the type of the source_data (e.g., txt, pdf, csv, etc.); inferred from the extension of the relative_path
@param protocol: the protocol used to store the source_data
@param status: the status of the source_data`,
	properties: {
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		deleted: {
	type: 'boolean',
	isRequired: true,
},
		deleted_at: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
	isRequired: true,
},
		id: {
	type: 'number',
	isRequired: true,
},
		name: {
	type: 'string',
	isRequired: true,
},
		relative_path: {
	type: 'string',
	isRequired: true,
},
		type: {
	type: 'string',
	isRequired: true,
},
		protocol: {
	type: 'ProtocolEnum',
	isRequired: true,
},
		status: {
	type: 'SourceDataStatusEnum',
	isRequired: true,
},
	},
} as const;

export const $SourceDataStatusEnum = {
	type: 'Enum',
	enum: ['created','unavailable','available','inconsistent_dataset',],
} as const;

export const $ValidationError = {
	properties: {
		loc: {
	type: 'array',
	contains: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'number',
}],
},
	isRequired: true,
},
		msg: {
	type: 'string',
	isRequired: true,
},
		type: {
	type: 'string',
	isRequired: true,
},
	},
} as const;