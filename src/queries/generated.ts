import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql'
import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: any; output: any }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any }
  EmailAddress: { input: any; output: any }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any }
  _FieldSet: { input: any; output: any }
}

export type ActiveUserMutations = {
  __typename?: 'ActiveUserMutations'
  /** Mark onboarding as complete */
  finishOnboarding: Scalars['Boolean']['output']
  /** Edit a user's profile */
  update: User
}

export type ActiveUserMutationsUpdateArgs = {
  user: UserUpdateInput
}

export type Activity = {
  __typename?: 'Activity'
  actionType: Scalars['String']['output']
  id: Scalars['ID']['output']
  info: Scalars['JSONObject']['output']
  message: Scalars['String']['output']
  resourceId: Scalars['String']['output']
  resourceType: Scalars['String']['output']
  streamId?: Maybe<Scalars['String']['output']>
  time: Scalars['DateTime']['output']
  userId: Scalars['String']['output']
}

export type ActivityCollection = {
  __typename?: 'ActivityCollection'
  cursor?: Maybe<Scalars['String']['output']>
  items?: Maybe<Array<Maybe<Activity>>>
  totalCount: Scalars['Int']['output']
}

export type AdminInviteList = {
  __typename?: 'AdminInviteList'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<ServerInvite>
  totalCount: Scalars['Int']['output']
}

export type AdminQueries = {
  __typename?: 'AdminQueries'
  inviteList: AdminInviteList
  projectList: ProjectCollection
  serverStatistics: ServerStatistics
  userList: AdminUserList
}

export type AdminQueriesInviteListArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>
  limit?: Scalars['Int']['input']
  query?: InputMaybe<Scalars['String']['input']>
}

export type AdminQueriesProjectListArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>
  limit?: Scalars['Int']['input']
  orderBy?: InputMaybe<Scalars['String']['input']>
  query?: InputMaybe<Scalars['String']['input']>
  visibility?: InputMaybe<Scalars['String']['input']>
}

export type AdminQueriesUserListArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>
  limit?: Scalars['Int']['input']
  query?: InputMaybe<Scalars['String']['input']>
  role?: InputMaybe<ServerRole>
}

export type AdminUserList = {
  __typename?: 'AdminUserList'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<AdminUserListItem>
  totalCount: Scalars['Int']['output']
}

export type AdminUserListItem = {
  __typename?: 'AdminUserListItem'
  avatar?: Maybe<Scalars['String']['output']>
  company?: Maybe<Scalars['String']['output']>
  email?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  role?: Maybe<Scalars['String']['output']>
  verified?: Maybe<Scalars['Boolean']['output']>
}

export type AdminUsersListCollection = {
  __typename?: 'AdminUsersListCollection'
  items: Array<AdminUsersListItem>
  totalCount: Scalars['Int']['output']
}

/**
 * A representation of a registered or invited user in the admin users list. Either registeredUser
 * or invitedUser will always be set, both values can't be null.
 */
export type AdminUsersListItem = {
  __typename?: 'AdminUsersListItem'
  id: Scalars['String']['output']
  invitedUser?: Maybe<ServerInvite>
  registeredUser?: Maybe<User>
}

export type ApiToken = {
  __typename?: 'ApiToken'
  createdAt: Scalars['DateTime']['output']
  id: Scalars['String']['output']
  lastChars: Scalars['String']['output']
  lastUsed: Scalars['DateTime']['output']
  lifespan: Scalars['BigInt']['output']
  name: Scalars['String']['output']
  scopes: Array<Maybe<Scalars['String']['output']>>
}

export type ApiTokenCreateInput = {
  lifespan?: InputMaybe<Scalars['BigInt']['input']>
  name: Scalars['String']['input']
  scopes: Array<Scalars['String']['input']>
}

export type AppAuthor = {
  __typename?: 'AppAuthor'
  avatar?: Maybe<Scalars['String']['output']>
  id: Scalars['String']['output']
  name: Scalars['String']['output']
}

export type AppCreateInput = {
  description: Scalars['String']['input']
  logo?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
  public?: InputMaybe<Scalars['Boolean']['input']>
  redirectUrl: Scalars['String']['input']
  scopes: Array<InputMaybe<Scalars['String']['input']>>
  termsAndConditionsLink?: InputMaybe<Scalars['String']['input']>
}

export type AppUpdateInput = {
  description: Scalars['String']['input']
  id: Scalars['String']['input']
  logo?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
  public?: InputMaybe<Scalars['Boolean']['input']>
  redirectUrl: Scalars['String']['input']
  scopes: Array<InputMaybe<Scalars['String']['input']>>
  termsAndConditionsLink?: InputMaybe<Scalars['String']['input']>
}

export type AuthStrategy = {
  __typename?: 'AuthStrategy'
  color?: Maybe<Scalars['String']['output']>
  icon: Scalars['String']['output']
  id: Scalars['String']['output']
  name: Scalars['String']['output']
  url: Scalars['String']['output']
}

export type AutomationCreateInput = {
  automationId: Scalars['String']['input']
  automationName: Scalars['String']['input']
  automationRevisionId: Scalars['String']['input']
  modelId: Scalars['String']['input']
  projectId: Scalars['String']['input']
  webhookId?: InputMaybe<Scalars['String']['input']>
}

export type AutomationFunctionRun = {
  __typename?: 'AutomationFunctionRun'
  contextView?: Maybe<Scalars['String']['output']>
  elapsed: Scalars['Float']['output']
  functionId: Scalars['String']['output']
  functionLogo?: Maybe<Scalars['String']['output']>
  functionName: Scalars['String']['output']
  id: Scalars['ID']['output']
  resultVersions: Array<Version>
  /**
   * NOTE: this is the schema for the results field below!
   * Current schema: {
   *   version: "1.0.0",
   *   values: {
   *     objectResults: Record<str, {
   *       category: string
   *       level: ObjectResultLevel
   *       objectIds: string[]
   *       message: str | null
   *       metadata: Records<str, unknown> | null
   *       visualoverrides: Records<str, unknown> | null
   *     }[]>
   *     blobIds?: string[]
   *   }
   * }
   */
  results?: Maybe<Scalars['JSONObject']['output']>
  status: AutomationRunStatus
  statusMessage?: Maybe<Scalars['String']['output']>
}

export type AutomationMutations = {
  __typename?: 'AutomationMutations'
  create: Scalars['Boolean']['output']
  functionRunStatusReport: Scalars['Boolean']['output']
}

export type AutomationMutationsCreateArgs = {
  input: AutomationCreateInput
}

export type AutomationMutationsFunctionRunStatusReportArgs = {
  input: AutomationRunStatusUpdateInput
}

export type AutomationRun = {
  __typename?: 'AutomationRun'
  automationId: Scalars['String']['output']
  automationName: Scalars['String']['output']
  createdAt: Scalars['DateTime']['output']
  functionRuns: Array<AutomationFunctionRun>
  id: Scalars['ID']['output']
  /** Resolved from all function run statuses */
  status: AutomationRunStatus
  updatedAt: Scalars['DateTime']['output']
  versionId: Scalars['String']['output']
}

export enum AutomationRunStatus {
  Failed = 'FAILED',
  Initializing = 'INITIALIZING',
  Running = 'RUNNING',
  Succeeded = 'SUCCEEDED',
}

export type AutomationRunStatusUpdateInput = {
  automationId: Scalars['String']['input']
  automationRevisionId: Scalars['String']['input']
  automationRunId: Scalars['String']['input']
  functionRuns: Array<FunctionRunStatusInput>
  versionId: Scalars['String']['input']
}

export type AutomationsStatus = {
  __typename?: 'AutomationsStatus'
  automationRuns: Array<AutomationRun>
  id: Scalars['ID']['output']
  status: AutomationRunStatus
  statusMessage?: Maybe<Scalars['String']['output']>
}

export type BlobMetadata = {
  __typename?: 'BlobMetadata'
  createdAt: Scalars['DateTime']['output']
  fileHash?: Maybe<Scalars['String']['output']>
  fileName: Scalars['String']['output']
  fileSize?: Maybe<Scalars['Int']['output']>
  fileType: Scalars['String']['output']
  id: Scalars['String']['output']
  streamId: Scalars['String']['output']
  uploadError?: Maybe<Scalars['String']['output']>
  uploadStatus: Scalars['Int']['output']
  userId: Scalars['String']['output']
}

export type BlobMetadataCollection = {
  __typename?: 'BlobMetadataCollection'
  cursor?: Maybe<Scalars['String']['output']>
  items?: Maybe<Array<BlobMetadata>>
  totalCount: Scalars['Int']['output']
  totalSize: Scalars['Int']['output']
}

export type Branch = {
  __typename?: 'Branch'
  /** All the recent activity on this branch in chronological order */
  activity?: Maybe<ActivityCollection>
  author?: Maybe<User>
  commits?: Maybe<CommitCollection>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['String']['output']
  name: Scalars['String']['output']
}

export type BranchActivityArgs = {
  actionType?: InputMaybe<Scalars['String']['input']>
  after?: InputMaybe<Scalars['DateTime']['input']>
  before?: InputMaybe<Scalars['DateTime']['input']>
  cursor?: InputMaybe<Scalars['DateTime']['input']>
  limit?: Scalars['Int']['input']
}

export type BranchCommitsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>
  limit?: Scalars['Int']['input']
}

export type BranchCollection = {
  __typename?: 'BranchCollection'
  cursor?: Maybe<Scalars['String']['output']>
  items?: Maybe<Array<Branch>>
  totalCount: Scalars['Int']['output']
}

export type BranchCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
  streamId: Scalars['String']['input']
}

export type BranchDeleteInput = {
  id: Scalars['String']['input']
  streamId: Scalars['String']['input']
}

export type BranchUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>
  id: Scalars['String']['input']
  name?: InputMaybe<Scalars['String']['input']>
  streamId: Scalars['String']['input']
}

export type Comment = {
  __typename?: 'Comment'
  archived: Scalars['Boolean']['output']
  author: LimitedUser
  authorId: Scalars['String']['output']
  createdAt: Scalars['DateTime']['output']
  /**
   * Legacy comment viewer data field
   * @deprecated Use the new viewerState field instead
   */
  data?: Maybe<Scalars['JSONObject']['output']>
  /** Whether or not comment is a reply to another comment */
  hasParent: Scalars['Boolean']['output']
  id: Scalars['String']['output']
  /** Parent thread, if there's any */
  parent?: Maybe<Comment>
  /** Plain-text version of the comment text, ideal for previews */
  rawText: Scalars['String']['output']
  /** @deprecated Not actually implemented */
  reactions?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  /** Gets the replies to this comment. */
  replies: CommentCollection
  /** Get authors of replies to this comment */
  replyAuthors: CommentReplyAuthorCollection
  /** Resources that this comment targets. Can be a mixture of either one stream, or multiple commits and objects. */
  resources: Array<ResourceIdentifier>
  screenshot?: Maybe<Scalars['String']['output']>
  text: SmartTextEditorValue
  /** The time this comment was last updated. Corresponds also to the latest reply to this comment, if any. */
  updatedAt: Scalars['DateTime']['output']
  /** The last time you viewed this comment. Present only if an auth'ed request. Relevant only if a top level commit. */
  viewedAt?: Maybe<Scalars['DateTime']['output']>
  /** Resource identifiers as defined and implemented in the Viewer of the new frontend */
  viewerResources: Array<ViewerResourceItem>
  /** SerializedViewerState */
  viewerState?: Maybe<Scalars['JSONObject']['output']>
}

export type CommentRepliesArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
}

export type CommentReplyAuthorsArgs = {
  limit?: Scalars['Int']['input']
}

export type CommentActivityMessage = {
  __typename?: 'CommentActivityMessage'
  comment: Comment
  type: Scalars['String']['output']
}

export type CommentCollection = {
  __typename?: 'CommentCollection'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<Comment>
  totalCount: Scalars['Int']['output']
}

export type CommentContentInput = {
  blobIds?: InputMaybe<Array<Scalars['String']['input']>>
  doc?: InputMaybe<Scalars['JSONObject']['input']>
}

/** Deprecated: Used by old stream-based mutations */
export type CommentCreateInput = {
  /** IDs of uploaded blobs that should be attached to this comment */
  blobIds: Array<Scalars['String']['input']>
  data: Scalars['JSONObject']['input']
  /**
   * Specifies the resources this comment is linked to. There are several use cases:
   * - a comment targets only one resource (commit or object)
   * - a comment targets one or more resources (commits or objects)
   * - a comment targets only a stream
   */
  resources: Array<InputMaybe<ResourceIdentifierInput>>
  screenshot?: InputMaybe<Scalars['String']['input']>
  streamId: Scalars['String']['input']
  /** ProseMirror document object */
  text?: InputMaybe<Scalars['JSONObject']['input']>
}

export type CommentDataFilters = {
  __typename?: 'CommentDataFilters'
  hiddenIds?: Maybe<Array<Scalars['String']['output']>>
  isolatedIds?: Maybe<Array<Scalars['String']['output']>>
  passMax?: Maybe<Scalars['Float']['output']>
  passMin?: Maybe<Scalars['Float']['output']>
  propertyInfoKey?: Maybe<Scalars['String']['output']>
  sectionBox?: Maybe<Scalars['JSONObject']['output']>
}

/** Equivalent to frontend-1's LocalFilterState */
export type CommentDataFiltersInput = {
  hiddenIds?: InputMaybe<Array<Scalars['String']['input']>>
  isolatedIds?: InputMaybe<Array<Scalars['String']['input']>>
  passMax?: InputMaybe<Scalars['Float']['input']>
  passMin?: InputMaybe<Scalars['Float']['input']>
  propertyInfoKey?: InputMaybe<Scalars['String']['input']>
  sectionBox?: InputMaybe<Scalars['JSONObject']['input']>
}

/** Deprecated: Used by old stream-based mutations */
export type CommentEditInput = {
  /** IDs of uploaded blobs that should be attached to this comment */
  blobIds: Array<Scalars['String']['input']>
  id: Scalars['String']['input']
  streamId: Scalars['String']['input']
  /** ProseMirror document object */
  text?: InputMaybe<Scalars['JSONObject']['input']>
}

export type CommentMutations = {
  __typename?: 'CommentMutations'
  archive: Scalars['Boolean']['output']
  create: Comment
  edit: Comment
  markViewed: Scalars['Boolean']['output']
  reply: Comment
}

export type CommentMutationsArchiveArgs = {
  archived?: Scalars['Boolean']['input']
  commentId: Scalars['String']['input']
}

export type CommentMutationsCreateArgs = {
  input: CreateCommentInput
}

export type CommentMutationsEditArgs = {
  input: EditCommentInput
}

export type CommentMutationsMarkViewedArgs = {
  commentId: Scalars['String']['input']
}

export type CommentMutationsReplyArgs = {
  input: CreateCommentReplyInput
}

export type CommentReplyAuthorCollection = {
  __typename?: 'CommentReplyAuthorCollection'
  items: Array<LimitedUser>
  totalCount: Scalars['Int']['output']
}

export type CommentThreadActivityMessage = {
  __typename?: 'CommentThreadActivityMessage'
  data?: Maybe<Scalars['JSONObject']['output']>
  reply?: Maybe<Comment>
  type: Scalars['String']['output']
}

export type Commit = {
  __typename?: 'Commit'
  /** All the recent activity on this commit in chronological order */
  activity?: Maybe<ActivityCollection>
  authorAvatar?: Maybe<Scalars['String']['output']>
  authorId?: Maybe<Scalars['String']['output']>
  authorName?: Maybe<Scalars['String']['output']>
  branch?: Maybe<Branch>
  branchName?: Maybe<Scalars['String']['output']>
  /**
   * The total number of comments for this commit. To actually get the comments, use the comments query and pass in a resource array consisting of of this commit's id.
   * E.g.,
   * ```
   * query{
   *   comments(streamId:"streamId" resources:[{resourceType: commit, resourceId:"commitId"}] ){
   *     ...
   *   }
   * ```
   */
  commentCount: Scalars['Int']['output']
  createdAt?: Maybe<Scalars['DateTime']['output']>
  id: Scalars['String']['output']
  message?: Maybe<Scalars['String']['output']>
  parents?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  referencedObject: Scalars['String']['output']
  sourceApplication?: Maybe<Scalars['String']['output']>
  /**
   * Will throw an authorization error if active user isn't authorized to see it, for example,
   * if a stream isn't public and the user doesn't have the appropriate rights.
   */
  stream: Stream
  /** @deprecated Use the stream field instead */
  streamId?: Maybe<Scalars['String']['output']>
  /** @deprecated Use the stream field instead */
  streamName?: Maybe<Scalars['String']['output']>
  totalChildrenCount?: Maybe<Scalars['Int']['output']>
}

export type CommitActivityArgs = {
  actionType?: InputMaybe<Scalars['String']['input']>
  after?: InputMaybe<Scalars['DateTime']['input']>
  before?: InputMaybe<Scalars['DateTime']['input']>
  cursor?: InputMaybe<Scalars['DateTime']['input']>
  limit?: Scalars['Int']['input']
}

export type CommitCollection = {
  __typename?: 'CommitCollection'
  cursor?: Maybe<Scalars['String']['output']>
  items?: Maybe<Array<Commit>>
  totalCount: Scalars['Int']['output']
}

export type CommitCreateInput = {
  branchName: Scalars['String']['input']
  message?: InputMaybe<Scalars['String']['input']>
  objectId: Scalars['String']['input']
  parents?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sourceApplication?: InputMaybe<Scalars['String']['input']>
  streamId: Scalars['String']['input']
  totalChildrenCount?: InputMaybe<Scalars['Int']['input']>
}

export type CommitDeleteInput = {
  id: Scalars['String']['input']
  streamId: Scalars['String']['input']
}

export type CommitReceivedInput = {
  commitId: Scalars['String']['input']
  message?: InputMaybe<Scalars['String']['input']>
  sourceApplication: Scalars['String']['input']
  streamId: Scalars['String']['input']
}

export type CommitUpdateInput = {
  id: Scalars['String']['input']
  message?: InputMaybe<Scalars['String']['input']>
  /** To move the commit to a different branch, please the name of the branch. */
  newBranchName?: InputMaybe<Scalars['String']['input']>
  streamId: Scalars['String']['input']
}

export type CommitsDeleteInput = {
  commitIds: Array<Scalars['String']['input']>
}

export type CommitsMoveInput = {
  commitIds: Array<Scalars['String']['input']>
  targetBranch: Scalars['String']['input']
}

export type CreateCommentInput = {
  content: CommentContentInput
  projectId: Scalars['String']['input']
  /** Resources that this comment should be attached to */
  resourceIdString: Scalars['String']['input']
  screenshot?: InputMaybe<Scalars['String']['input']>
  /**
   * SerializedViewerState. If omitted, comment won't render (correctly) inside the
   * viewer, but will still be retrievable through the API
   */
  viewerState?: InputMaybe<Scalars['JSONObject']['input']>
}

export type CreateCommentReplyInput = {
  content: CommentContentInput
  threadId: Scalars['String']['input']
}

export type CreateModelInput = {
  description?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
  projectId: Scalars['ID']['input']
}

export type DeleteModelInput = {
  id: Scalars['ID']['input']
  projectId: Scalars['ID']['input']
}

export type DeleteVersionsInput = {
  versionIds: Array<Scalars['String']['input']>
}

export enum DiscoverableStreamsSortType {
  CreatedDate = 'CREATED_DATE',
  FavoritesCount = 'FAVORITES_COUNT',
}

export type DiscoverableStreamsSortingInput = {
  direction: SortDirection
  type: DiscoverableStreamsSortType
}

export type EditCommentInput = {
  commentId: Scalars['String']['input']
  content: CommentContentInput
}

export type FileUpload = {
  __typename?: 'FileUpload'
  branchName: Scalars['String']['output']
  /** If present, the conversion result is stored in this commit. */
  convertedCommitId?: Maybe<Scalars['String']['output']>
  convertedLastUpdate: Scalars['DateTime']['output']
  /** Holds any errors or info. */
  convertedMessage?: Maybe<Scalars['String']['output']>
  /** 0 = queued, 1 = processing, 2 = success, 3 = error */
  convertedStatus: Scalars['Int']['output']
  /** Alias for convertedCommitId */
  convertedVersionId?: Maybe<Scalars['String']['output']>
  fileName: Scalars['String']['output']
  fileSize: Scalars['Int']['output']
  fileType: Scalars['String']['output']
  id: Scalars['String']['output']
  /** Model associated with the file upload, if it exists already */
  model?: Maybe<Model>
  /** Alias for branchName */
  modelName: Scalars['String']['output']
  /** Alias for streamId */
  projectId: Scalars['String']['output']
  streamId: Scalars['String']['output']
  uploadComplete: Scalars['Boolean']['output']
  uploadDate: Scalars['DateTime']['output']
  /** The user's id that uploaded this file. */
  userId: Scalars['String']['output']
}

export type FunctionRunStatusInput = {
  contextView?: InputMaybe<Scalars['String']['input']>
  elapsed: Scalars['Float']['input']
  functionId: Scalars['String']['input']
  functionLogo?: InputMaybe<Scalars['String']['input']>
  functionName: Scalars['String']['input']
  resultVersionIds: Array<Scalars['String']['input']>
  /**
   * Current schema: {
   *   version: "1.0.0",
   *   values: {
   *     speckleObjects: Record<ObjectId, {level: string; statusMessage: string}[]>
   *     blobIds?: string[]
   *   }
   * }
   */
  results?: InputMaybe<Scalars['JSONObject']['input']>
  status: AutomationRunStatus
  statusMessage?: InputMaybe<Scalars['String']['input']>
}

export type LegacyCommentViewerData = {
  __typename?: 'LegacyCommentViewerData'
  /**
   * An array representing a user's camera position:
   * [camPos.x, camPos.y, camPos.z, camTarget.x, camTarget.y, camTarget.z, isOrtho, zoomNumber]
   */
  camPos: Array<Scalars['Float']['output']>
  /** Old FE LocalFilterState type */
  filters: CommentDataFilters
  /** THREE.Vector3 {x, y, z} */
  location: Scalars['JSONObject']['output']
  /** Viewer.getCurrentSectionBox(): THREE.Box3 */
  sectionBox?: Maybe<Scalars['JSONObject']['output']>
  /** Currently unused. Ideally comments should keep track of selected objects. */
  selection?: Maybe<Scalars['JSONObject']['output']>
}

/**
 * Limited user type, for showing public info about a user
 * to another user
 */
export type LimitedUser = {
  __typename?: 'LimitedUser'
  /** All the recent activity from this user in chronological order */
  activity?: Maybe<ActivityCollection>
  avatar?: Maybe<Scalars['String']['output']>
  bio?: Maybe<Scalars['String']['output']>
  /** Get public stream commits authored by the user */
  commits?: Maybe<CommitCollection>
  company?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  role?: Maybe<Scalars['String']['output']>
  /** Returns all discoverable streams that the user is a collaborator on */
  streams: StreamCollection
  /** The user's timeline in chronological order */
  timeline?: Maybe<ActivityCollection>
  /** Total amount of favorites attached to streams owned by the user */
  totalOwnedStreamsFavorites: Scalars['Int']['output']
  verified?: Maybe<Scalars['Boolean']['output']>
}

/**
 * Limited user type, for showing public info about a user
 * to another user
 */
export type LimitedUserActivityArgs = {
  actionType?: InputMaybe<Scalars['String']['input']>
  after?: InputMaybe<Scalars['DateTime']['input']>
  before?: InputMaybe<Scalars['DateTime']['input']>
  cursor?: InputMaybe<Scalars['DateTime']['input']>
  limit?: Scalars['Int']['input']
}

/**
 * Limited user type, for showing public info about a user
 * to another user
 */
export type LimitedUserCommitsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>
  limit?: Scalars['Int']['input']
}

/**
 * Limited user type, for showing public info about a user
 * to another user
 */
export type LimitedUserStreamsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>
  limit?: Scalars['Int']['input']
}

/**
 * Limited user type, for showing public info about a user
 * to another user
 */
export type LimitedUserTimelineArgs = {
  after?: InputMaybe<Scalars['DateTime']['input']>
  before?: InputMaybe<Scalars['DateTime']['input']>
  cursor?: InputMaybe<Scalars['DateTime']['input']>
  limit?: Scalars['Int']['input']
}

export type Model = {
  __typename?: 'Model'
  author: LimitedUser
  automationStatus?: Maybe<AutomationsStatus>
  /** Return a model tree of children */
  childrenTree: Array<ModelsTreeItem>
  /** All comment threads in this model */
  commentThreads: CommentCollection
  createdAt: Scalars['DateTime']['output']
  description?: Maybe<Scalars['String']['output']>
  /** The shortened/display name that doesn't include the names of parent models */
  displayName: Scalars['String']['output']
  id: Scalars['ID']['output']
  /** Full name including the names of parent models delimited by forward slashes */
  name: Scalars['String']['output']
  /** Returns a list of versions that are being created from a file import */
  pendingImportedVersions: Array<FileUpload>
  previewUrl?: Maybe<Scalars['String']['output']>
  updatedAt: Scalars['DateTime']['output']
  version: Version
  versions: VersionCollection
}

export type ModelCommentThreadsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>
  limit?: Scalars['Int']['input']
}

export type ModelPendingImportedVersionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
}

export type ModelVersionArgs = {
  id: Scalars['String']['input']
}

export type ModelVersionsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>
  filter?: InputMaybe<ModelVersionsFilter>
  limit?: Scalars['Int']['input']
}

export type ModelCollection = {
  __typename?: 'ModelCollection'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<Model>
  totalCount: Scalars['Int']['output']
}

export type ModelMutations = {
  __typename?: 'ModelMutations'
  create: Model
  delete: Scalars['Boolean']['output']
  update: Model
}

export type ModelMutationsCreateArgs = {
  input: CreateModelInput
}

export type ModelMutationsDeleteArgs = {
  input: DeleteModelInput
}

export type ModelMutationsUpdateArgs = {
  input: UpdateModelInput
}

export type ModelVersionsFilter = {
  /** Make sure these specified versions are always loaded first */
  priorityIds?: InputMaybe<Array<Scalars['String']['input']>>
  /** Only return versions specified in `priorityIds` */
  priorityIdsOnly?: InputMaybe<Scalars['Boolean']['input']>
}

export type ModelsTreeItem = {
  __typename?: 'ModelsTreeItem'
  children: Array<ModelsTreeItem>
  fullName: Scalars['String']['output']
  /** Whether or not this item has nested children models */
  hasChildren: Scalars['Boolean']['output']
  id: Scalars['ID']['output']
  /**
   * Nullable cause the item can represent a parent that doesn't actually exist as a model on its own.
   * E.g. A model named "foo/bar" is supposed to be a child of "foo" and will be represented as such,
   * even if "foo" doesn't exist as its own model.
   */
  model?: Maybe<Model>
  name: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type ModelsTreeItemCollection = {
  __typename?: 'ModelsTreeItemCollection'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<ModelsTreeItem>
  totalCount: Scalars['Int']['output']
}

export type MoveVersionsInput = {
  /** If the name references a nonexistant model, it will be created */
  targetModelName: Scalars['String']['input']
  versionIds: Array<Scalars['String']['input']>
}

export type Mutation = {
  __typename?: 'Mutation'
  /** The void stares back. */
  _?: Maybe<Scalars['String']['output']>
  /** Various Active User oriented mutations */
  activeUserMutations: ActiveUserMutations
  adminDeleteUser: Scalars['Boolean']['output']
  /** Creates an personal api token. */
  apiTokenCreate: Scalars['String']['output']
  /** Revokes (deletes) an personal api token/app token. */
  apiTokenRevoke: Scalars['Boolean']['output']
  /** Register a new third party application. */
  appCreate: Scalars['String']['output']
  /** Deletes a thirty party application. */
  appDelete: Scalars['Boolean']['output']
  /** Revokes (de-authorizes) an application that you have previously authorized. */
  appRevokeAccess?: Maybe<Scalars['Boolean']['output']>
  /** Create an app token. Only apps can create app tokens and they don't show up under personal access tokens. */
  appTokenCreate: Scalars['String']['output']
  /** Update an existing third party application. **Note: This will invalidate all existing tokens, refresh tokens and access codes and will require existing users to re-authorize it.** */
  appUpdate: Scalars['Boolean']['output']
  automationMutations: AutomationMutations
  branchCreate: Scalars['String']['output']
  branchDelete: Scalars['Boolean']['output']
  branchUpdate: Scalars['Boolean']['output']
  /** Broadcast user activity in the viewer */
  broadcastViewerUserActivity: Scalars['Boolean']['output']
  /**
   * Archives a comment.
   * @deprecated Use commentMutations version
   */
  commentArchive: Scalars['Boolean']['output']
  /**
   * Creates a comment
   * @deprecated Use commentMutations version
   */
  commentCreate: Scalars['String']['output']
  /**
   * Edits a comment.
   * @deprecated Use commentMutations version
   */
  commentEdit: Scalars['Boolean']['output']
  commentMutations: CommentMutations
  /**
   * Adds a reply to a comment.
   * @deprecated Use commentMutations version
   */
  commentReply: Scalars['String']['output']
  /**
   * Flags a comment as viewed by you (the logged in user).
   * @deprecated Use commentMutations version
   */
  commentView: Scalars['Boolean']['output']
  commitCreate: Scalars['String']['output']
  commitDelete: Scalars['Boolean']['output']
  commitReceive: Scalars['Boolean']['output']
  commitUpdate: Scalars['Boolean']['output']
  /** Delete a batch of commits */
  commitsDelete: Scalars['Boolean']['output']
  /** Move a batch of commits to a new branch */
  commitsMove: Scalars['Boolean']['output']
  /** Delete a pending invite */
  inviteDelete: Scalars['Boolean']['output']
  /** Re-send a pending invite */
  inviteResend: Scalars['Boolean']['output']
  modelMutations: ModelMutations
  objectCreate: Array<Maybe<Scalars['String']['output']>>
  projectMutations: ProjectMutations
  /** (Re-)send the account verification e-mail */
  requestVerification: Scalars['Boolean']['output']
  requestVerificationByEmail: Scalars['Boolean']['output']
  serverInfoUpdate?: Maybe<Scalars['Boolean']['output']>
  serverInviteBatchCreate: Scalars['Boolean']['output']
  /** Invite a new user to the speckle server and return the invite ID */
  serverInviteCreate: Scalars['Boolean']['output']
  /** Request access to a specific stream */
  streamAccessRequestCreate: StreamAccessRequest
  /** Accept or decline a stream access request. Must be a stream owner to invoke this. */
  streamAccessRequestUse: Scalars['Boolean']['output']
  /** Creates a new stream. */
  streamCreate?: Maybe<Scalars['String']['output']>
  /** Deletes an existing stream. */
  streamDelete: Scalars['Boolean']['output']
  streamFavorite?: Maybe<Stream>
  streamInviteBatchCreate: Scalars['Boolean']['output']
  /** Cancel a pending stream invite. Can only be invoked by a stream owner. */
  streamInviteCancel: Scalars['Boolean']['output']
  /** Invite a new or registered user to the specified stream */
  streamInviteCreate: Scalars['Boolean']['output']
  /** Accept or decline a stream invite */
  streamInviteUse: Scalars['Boolean']['output']
  /** Remove yourself from stream collaborators (not possible for the owner) */
  streamLeave: Scalars['Boolean']['output']
  /** Revokes the permissions of a user on a given stream. */
  streamRevokePermission?: Maybe<Scalars['Boolean']['output']>
  /** Updates an existing stream. */
  streamUpdate: Scalars['Boolean']['output']
  /** Update permissions of a user on a given stream. */
  streamUpdatePermission?: Maybe<Scalars['Boolean']['output']>
  streamsDelete: Scalars['Boolean']['output']
  /**
   * Used for broadcasting real time typing status in comment threads. Does not persist any info.
   * @deprecated Use broadcastViewerUserActivity
   */
  userCommentThreadActivityBroadcast: Scalars['Boolean']['output']
  /** Delete a user's account. */
  userDelete: Scalars['Boolean']['output']
  userNotificationPreferencesUpdate?: Maybe<Scalars['Boolean']['output']>
  userRoleChange: Scalars['Boolean']['output']
  /**
   * Edits a user's profile.
   * @deprecated Use activeUserMutations version
   */
  userUpdate: Scalars['Boolean']['output']
  /**
   * Used for broadcasting real time chat head bubbles and status. Does not persist any info.
   * @deprecated Use broadcastViewerUserActivity
   */
  userViewerActivityBroadcast: Scalars['Boolean']['output']
  versionMutations: VersionMutations
  /** Creates a new webhook on a stream */
  webhookCreate: Scalars['String']['output']
  /** Deletes an existing webhook */
  webhookDelete: Scalars['String']['output']
  /** Updates an existing webhook */
  webhookUpdate: Scalars['String']['output']
}

export type MutationAdminDeleteUserArgs = {
  userConfirmation: UserDeleteInput
}

export type MutationApiTokenCreateArgs = {
  token: ApiTokenCreateInput
}

export type MutationApiTokenRevokeArgs = {
  token: Scalars['String']['input']
}

export type MutationAppCreateArgs = {
  app: AppCreateInput
}

export type MutationAppDeleteArgs = {
  appId: Scalars['String']['input']
}

export type MutationAppRevokeAccessArgs = {
  appId: Scalars['String']['input']
}

export type MutationAppTokenCreateArgs = {
  token: ApiTokenCreateInput
}

export type MutationAppUpdateArgs = {
  app: AppUpdateInput
}

export type MutationBranchCreateArgs = {
  branch: BranchCreateInput
}

export type MutationBranchDeleteArgs = {
  branch: BranchDeleteInput
}

export type MutationBranchUpdateArgs = {
  branch: BranchUpdateInput
}

export type MutationBroadcastViewerUserActivityArgs = {
  message: ViewerUserActivityMessageInput
  projectId: Scalars['String']['input']
  resourceIdString: Scalars['String']['input']
}

export type MutationCommentArchiveArgs = {
  archived?: Scalars['Boolean']['input']
  commentId: Scalars['String']['input']
  streamId: Scalars['String']['input']
}

export type MutationCommentCreateArgs = {
  input: CommentCreateInput
}

export type MutationCommentEditArgs = {
  input: CommentEditInput
}

export type MutationCommentReplyArgs = {
  input: ReplyCreateInput
}

export type MutationCommentViewArgs = {
  commentId: Scalars['String']['input']
  streamId: Scalars['String']['input']
}

export type MutationCommitCreateArgs = {
  commit: CommitCreateInput
}

export type MutationCommitDeleteArgs = {
  commit: CommitDeleteInput
}

export type MutationCommitReceiveArgs = {
  input: CommitReceivedInput
}

export type MutationCommitUpdateArgs = {
  commit: CommitUpdateInput
}

export type MutationCommitsDeleteArgs = {
  input: CommitsDeleteInput
}

export type MutationCommitsMoveArgs = {
  input: CommitsMoveInput
}

export type MutationInviteDeleteArgs = {
  inviteId: Scalars['String']['input']
}

export type MutationInviteResendArgs = {
  inviteId: Scalars['String']['input']
}

export type MutationObjectCreateArgs = {
  objectInput: ObjectCreateInput
}

export type MutationRequestVerificationByEmailArgs = {
  email: Scalars['String']['input']
}

export type MutationServerInfoUpdateArgs = {
  info: ServerInfoUpdateInput
}

export type MutationServerInviteBatchCreateArgs = {
  input: Array<ServerInviteCreateInput>
}

export type MutationServerInviteCreateArgs = {
  input: ServerInviteCreateInput
}

export type MutationStreamAccessRequestCreateArgs = {
  streamId: Scalars['String']['input']
}

export type MutationStreamAccessRequestUseArgs = {
  accept: Scalars['Boolean']['input']
  requestId: Scalars['String']['input']
  role?: StreamRole
}

export type MutationStreamCreateArgs = {
  stream: StreamCreateInput
}

export type MutationStreamDeleteArgs = {
  id: Scalars['String']['input']
}

export type MutationStreamFavoriteArgs = {
  favorited: Scalars['Boolean']['input']
  streamId: Scalars['String']['input']
}

export type MutationStreamInviteBatchCreateArgs = {
  input: Array<StreamInviteCreateInput>
}

export type MutationStreamInviteCancelArgs = {
  inviteId: Scalars['String']['input']
  streamId: Scalars['String']['input']
}

export type MutationStreamInviteCreateArgs = {
  input: StreamInviteCreateInput
}

export type MutationStreamInviteUseArgs = {
  accept: Scalars['Boolean']['input']
  streamId: Scalars['String']['input']
  token: Scalars['String']['input']
}

export type MutationStreamLeaveArgs = {
  streamId: Scalars['String']['input']
}

export type MutationStreamRevokePermissionArgs = {
  permissionParams: StreamRevokePermissionInput
}

export type MutationStreamUpdateArgs = {
  stream: StreamUpdateInput
}

export type MutationStreamUpdatePermissionArgs = {
  permissionParams: StreamUpdatePermissionInput
}

export type MutationStreamsDeleteArgs = {
  ids?: InputMaybe<Array<Scalars['String']['input']>>
}

export type MutationUserCommentThreadActivityBroadcastArgs = {
  commentId: Scalars['String']['input']
  data?: InputMaybe<Scalars['JSONObject']['input']>
  streamId: Scalars['String']['input']
}

export type MutationUserDeleteArgs = {
  userConfirmation: UserDeleteInput
}

export type MutationUserNotificationPreferencesUpdateArgs = {
  preferences: Scalars['JSONObject']['input']
}

export type MutationUserRoleChangeArgs = {
  userRoleInput: UserRoleInput
}

export type MutationUserUpdateArgs = {
  user: UserUpdateInput
}

export type MutationUserViewerActivityBroadcastArgs = {
  data?: InputMaybe<Scalars['JSONObject']['input']>
  resourceId: Scalars['String']['input']
  streamId: Scalars['String']['input']
}

export type MutationWebhookCreateArgs = {
  webhook: WebhookCreateInput
}

export type MutationWebhookDeleteArgs = {
  webhook: WebhookDeleteInput
}

export type MutationWebhookUpdateArgs = {
  webhook: WebhookUpdateInput
}

export type Object = {
  __typename?: 'Object'
  applicationId?: Maybe<Scalars['String']['output']>
  /**
   * Get any objects that this object references. In the case of commits, this will give you a commit's constituent objects.
   * **NOTE**: Providing any of the two last arguments ( `query`, `orderBy` ) will trigger a different code branch that executes a much more expensive SQL query. It is not recommended to do so for basic clients that are interested in purely getting all the objects of a given commit.
   */
  children: ObjectCollection
  /**
   * The total number of comments for this commit. To actually get the comments, use the comments query and pass in a resource array consisting of of this object's id.
   * E.g.,
   * ```
   * query{
   *   comments(streamId:"streamId" resources:[{resourceType: object, resourceId:"objectId"}] ){
   *     ...
   *   }
   * ```
   */
  commentCount: Scalars['Int']['output']
  createdAt?: Maybe<Scalars['DateTime']['output']>
  /** The full object, with all its props & other things. **NOTE:** If you're requesting objects for the purpose of recreating & displaying, you probably only want to request this specific field. */
  data?: Maybe<Scalars['JSONObject']['output']>
  id: Scalars['String']['output']
  speckleType?: Maybe<Scalars['String']['output']>
  totalChildrenCount?: Maybe<Scalars['Int']['output']>
}

export type ObjectChildrenArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>
  depth?: Scalars['Int']['input']
  limit?: Scalars['Int']['input']
  orderBy?: InputMaybe<Scalars['JSONObject']['input']>
  query?: InputMaybe<Array<Scalars['JSONObject']['input']>>
  select?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ObjectCollection = {
  __typename?: 'ObjectCollection'
  cursor?: Maybe<Scalars['String']['output']>
  objects: Array<Maybe<Object>>
  totalCount: Scalars['Int']['output']
}

export type ObjectCreateInput = {
  /** The objects you want to create. */
  objects: Array<InputMaybe<Scalars['JSONObject']['input']>>
  /** The stream against which these objects will be created. */
  streamId: Scalars['String']['input']
}

export type PasswordStrengthCheckFeedback = {
  __typename?: 'PasswordStrengthCheckFeedback'
  suggestions: Array<Scalars['String']['output']>
  warning?: Maybe<Scalars['String']['output']>
}

export type PasswordStrengthCheckResults = {
  __typename?: 'PasswordStrengthCheckResults'
  /** Verbal feedback to help choose better passwords. set when score <= 2. */
  feedback: PasswordStrengthCheckFeedback
  /**
   * Integer from 0-4 (useful for implementing a strength bar):
   * 0 too guessable: risky password. (guesses < 10^3)
   * 1 very guessable: protection from throttled online attacks. (guesses < 10^6)
   * 2 somewhat guessable: protection from unthrottled online attacks. (guesses < 10^8)
   * 3 safely unguessable: moderate protection from offline slow-hash scenario. (guesses < 10^10)
   * 4 very unguessable: strong protection from offline slow-hash scenario. (guesses >= 10^10)
   */
  score: Scalars['Int']['output']
}

export type PendingStreamCollaborator = {
  __typename?: 'PendingStreamCollaborator'
  id: Scalars['String']['output']
  inviteId: Scalars['String']['output']
  invitedBy: LimitedUser
  projectId: Scalars['String']['output']
  projectName: Scalars['String']['output']
  role: Scalars['String']['output']
  streamId: Scalars['String']['output']
  streamName: Scalars['String']['output']
  /** E-mail address or name of the invited user */
  title: Scalars['String']['output']
  /** Only available if the active user is the pending stream collaborator */
  token?: Maybe<Scalars['String']['output']>
  /** Set only if user is registered */
  user?: Maybe<LimitedUser>
}

export type Project = {
  __typename?: 'Project'
  allowPublicComments: Scalars['Boolean']['output']
  /** All comment threads in this project */
  commentThreads: ProjectCommentCollection
  createdAt: Scalars['DateTime']['output']
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  /** Collaborators who have been invited, but not yet accepted. */
  invitedTeam?: Maybe<Array<PendingStreamCollaborator>>
  /** Returns a specific model by its ID */
  model: Model
  /** Return a model tree of children for the specified model name */
  modelChildrenTree: Array<ModelsTreeItem>
  /** Returns a flat list of all models */
  models: ModelCollection
  /**
   * Return's a project's models in a tree view with submodels being nested under parent models
   * real or fake (e.g., with a foo/bar model, it will be nested under foo even if such a model doesn't actually exist)
   */
  modelsTree: ModelsTreeItemCollection
  name: Scalars['String']['output']
  /** Returns a list models that are being created from a file import */
  pendingImportedModels: Array<FileUpload>
  /** Active user's role for this project. `null` if request is not authenticated, or the project is not explicitly shared with you. */
  role?: Maybe<Scalars['String']['output']>
  /** Source apps used in any models of this project */
  sourceApps: Array<Scalars['String']['output']>
  team: Array<ProjectCollaborator>
  updatedAt: Scalars['DateTime']['output']
  /** Returns a flat list of all project versions */
  versions: VersionCollection
  /** Return metadata about resources being requested in the viewer */
  viewerResources: Array<ViewerResourceGroup>
  visibility: ProjectVisibility
  webhooks: WebhookCollection
}

export type ProjectCommentThreadsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>
  filter?: InputMaybe<ProjectCommentsFilter>
  limit?: Scalars['Int']['input']
}

export type ProjectModelArgs = {
  id: Scalars['String']['input']
}

export type ProjectModelChildrenTreeArgs = {
  fullName: Scalars['String']['input']
}

export type ProjectModelsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>
  filter?: InputMaybe<ProjectModelsFilter>
  limit?: Scalars['Int']['input']
}

export type ProjectModelsTreeArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>
  filter?: InputMaybe<ProjectModelsTreeFilter>
  limit?: Scalars['Int']['input']
}

export type ProjectPendingImportedModelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
}

export type ProjectVersionsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>
  limit?: Scalars['Int']['input']
}

export type ProjectViewerResourcesArgs = {
  loadedVersionsOnly?: InputMaybe<Scalars['Boolean']['input']>
  resourceIdString: Scalars['String']['input']
}

export type ProjectWebhooksArgs = {
  id?: InputMaybe<Scalars['String']['input']>
}

export type ProjectAutomationsStatusUpdatedMessage = {
  __typename?: 'ProjectAutomationsStatusUpdatedMessage'
  model: Model
  project: Project
  status: AutomationsStatus
  version: Version
}

export type ProjectCollaborator = {
  __typename?: 'ProjectCollaborator'
  role: Scalars['String']['output']
  user: LimitedUser
}

export type ProjectCollection = {
  __typename?: 'ProjectCollection'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<Project>
  totalCount: Scalars['Int']['output']
}

export type ProjectCommentCollection = {
  __typename?: 'ProjectCommentCollection'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<Comment>
  totalArchivedCount: Scalars['Int']['output']
  totalCount: Scalars['Int']['output']
}

export type ProjectCommentsFilter = {
  /** Whether or not to include archived/resolved threads */
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>
  /**
   * By default if resourceIdString is set, the "versionId" part of model resource identifiers will be ignored
   * and all comments of all versions of any of the referenced models will be returned. If `loadedVersionsOnly` is
   * enabled, then only comment threads of loaded/referenced versions in resourceIdString will be returned.
   */
  loadedVersionsOnly?: InputMaybe<Scalars['Boolean']['input']>
  /**
   * Only request comments belonging to the resources identified by this
   * comma-delimited resouce string (same format that's used in the viewer URL)
   */
  resourceIdString?: InputMaybe<Scalars['String']['input']>
}

export type ProjectCommentsUpdatedMessage = {
  __typename?: 'ProjectCommentsUpdatedMessage'
  /** Null if deleted */
  comment?: Maybe<Comment>
  id: Scalars['String']['output']
  type: ProjectCommentsUpdatedMessageType
}

export enum ProjectCommentsUpdatedMessageType {
  Archived = 'ARCHIVED',
  Created = 'CREATED',
  Updated = 'UPDATED',
}

/** Any values left null will be ignored */
export type ProjectCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  visibility?: InputMaybe<ProjectVisibility>
}

export type ProjectFileImportUpdatedMessage = {
  __typename?: 'ProjectFileImportUpdatedMessage'
  /** Upload ID */
  id: Scalars['String']['output']
  type: ProjectFileImportUpdatedMessageType
  upload: FileUpload
}

export enum ProjectFileImportUpdatedMessageType {
  Created = 'CREATED',
  Updated = 'UPDATED',
}

export type ProjectInviteCreateInput = {
  /** Either this or userId must be filled */
  email?: InputMaybe<Scalars['String']['input']>
  /** Defaults to the contributor role, if not specified */
  role?: InputMaybe<Scalars['String']['input']>
  /** Can only be specified if guest mode is on or if the user is an admin */
  serverRole?: InputMaybe<Scalars['String']['input']>
  /** Either this or email must be filled */
  userId?: InputMaybe<Scalars['String']['input']>
}

export type ProjectInviteMutations = {
  __typename?: 'ProjectInviteMutations'
  /** Batch invite to project */
  batchCreate: Project
  /** Cancel a pending stream invite. Can only be invoked by a project owner. */
  cancel: Project
  /** Invite a new or registered user to be a project collaborator. Can only be invoked by a project owner. */
  create: Project
  /** Accept or decline a project invite */
  use: Scalars['Boolean']['output']
}

export type ProjectInviteMutationsBatchCreateArgs = {
  input: Array<ProjectInviteCreateInput>
  projectId: Scalars['ID']['input']
}

export type ProjectInviteMutationsCancelArgs = {
  inviteId: Scalars['String']['input']
  projectId: Scalars['ID']['input']
}

export type ProjectInviteMutationsCreateArgs = {
  input: ProjectInviteCreateInput
  projectId: Scalars['ID']['input']
}

export type ProjectInviteMutationsUseArgs = {
  input: ProjectInviteUseInput
}

export type ProjectInviteUseInput = {
  accept: Scalars['Boolean']['input']
  projectId: Scalars['ID']['input']
  token: Scalars['String']['input']
}

export type ProjectModelsFilter = {
  /** Filter by IDs of contributors who participated in models */
  contributors?: InputMaybe<Array<Scalars['String']['input']>>
  /** Excldue models w/ the specified IDs */
  excludeIds?: InputMaybe<Array<Scalars['String']['input']>>
  /** Only select models w/ the specified IDs */
  ids?: InputMaybe<Array<Scalars['String']['input']>>
  /** Filter out models that don't have any versions */
  onlyWithVersions?: InputMaybe<Scalars['Boolean']['input']>
  /** Filter by model names */
  search?: InputMaybe<Scalars['String']['input']>
  /** Filter by source apps used in models */
  sourceApps?: InputMaybe<Array<Scalars['String']['input']>>
}

export type ProjectModelsTreeFilter = {
  /** Filter by IDs of contributors who participated in models */
  contributors?: InputMaybe<Array<Scalars['String']['input']>>
  /** Search for specific models. If used, tree items from different levels may be mixed. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Filter by source apps used in models */
  sourceApps?: InputMaybe<Array<Scalars['String']['input']>>
}

export type ProjectModelsUpdatedMessage = {
  __typename?: 'ProjectModelsUpdatedMessage'
  /** Model ID */
  id: Scalars['String']['output']
  /** Null if model was deleted */
  model?: Maybe<Model>
  type: ProjectModelsUpdatedMessageType
}

export enum ProjectModelsUpdatedMessageType {
  Created = 'CREATED',
  Deleted = 'DELETED',
  Updated = 'UPDATED',
}

export type ProjectMutations = {
  __typename?: 'ProjectMutations'
  /** Create new project */
  create: Project
  /**
   * Create onboarding/tutorial project. If one is already created for the active user, that
   * one will be returned instead.
   */
  createForOnboarding: Project
  /** Delete an existing project */
  delete: Scalars['Boolean']['output']
  /** Invite related mutations */
  invites: ProjectInviteMutations
  /** Leave a project. Only possible if you're not the last remaining owner. */
  leave: Scalars['Boolean']['output']
  /** Updates an existing project */
  update: Project
  /** Update role for a collaborator */
  updateRole: Project
}

export type ProjectMutationsCreateArgs = {
  input?: InputMaybe<ProjectCreateInput>
}

export type ProjectMutationsDeleteArgs = {
  id: Scalars['String']['input']
}

export type ProjectMutationsLeaveArgs = {
  id: Scalars['String']['input']
}

export type ProjectMutationsUpdateArgs = {
  update: ProjectUpdateInput
}

export type ProjectMutationsUpdateRoleArgs = {
  input: ProjectUpdateRoleInput
}

export type ProjectPendingModelsUpdatedMessage = {
  __typename?: 'ProjectPendingModelsUpdatedMessage'
  /** Upload ID */
  id: Scalars['String']['output']
  model: FileUpload
  type: ProjectPendingModelsUpdatedMessageType
}

export enum ProjectPendingModelsUpdatedMessageType {
  Created = 'CREATED',
  Updated = 'UPDATED',
}

export type ProjectPendingVersionsUpdatedMessage = {
  __typename?: 'ProjectPendingVersionsUpdatedMessage'
  /** Upload ID */
  id: Scalars['String']['output']
  type: ProjectPendingVersionsUpdatedMessageType
  version: FileUpload
}

export enum ProjectPendingVersionsUpdatedMessageType {
  Created = 'CREATED',
  Updated = 'UPDATED',
}

/** Any values left null will be ignored, so only set the properties that you want updated */
export type ProjectUpdateInput = {
  allowPublicComments?: InputMaybe<Scalars['Boolean']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
  name?: InputMaybe<Scalars['String']['input']>
  visibility?: InputMaybe<ProjectVisibility>
}

export type ProjectUpdateRoleInput = {
  projectId: Scalars['String']['input']
  /** Leave role as null to revoke access entirely */
  role?: InputMaybe<Scalars['String']['input']>
  userId: Scalars['String']['input']
}

export type ProjectUpdatedMessage = {
  __typename?: 'ProjectUpdatedMessage'
  /** Project ID */
  id: Scalars['String']['output']
  /** Project entity, null if project was deleted */
  project?: Maybe<Project>
  /** Message type */
  type: ProjectUpdatedMessageType
}

export enum ProjectUpdatedMessageType {
  Deleted = 'DELETED',
  Updated = 'UPDATED',
}

export type ProjectVersionsPreviewGeneratedMessage = {
  __typename?: 'ProjectVersionsPreviewGeneratedMessage'
  objectId: Scalars['String']['output']
  projectId: Scalars['String']['output']
  versionId: Scalars['String']['output']
}

export type ProjectVersionsUpdatedMessage = {
  __typename?: 'ProjectVersionsUpdatedMessage'
  /** Version ID */
  id: Scalars['String']['output']
  /** Only set if version was deleted, in other scenarios can be queried from 'version' */
  modelId?: Maybe<Scalars['String']['output']>
  type: ProjectVersionsUpdatedMessageType
  /** Null if version was deleted */
  version?: Maybe<Version>
}

export enum ProjectVersionsUpdatedMessageType {
  Created = 'CREATED',
  Deleted = 'DELETED',
  Updated = 'UPDATED',
}

export enum ProjectVisibility {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
  Unlisted = 'UNLISTED',
}

export type Query = {
  __typename?: 'Query'
  /** Stare into the void. */
  _?: Maybe<Scalars['String']['output']>
  /** Gets the profile of the authenticated user or null if not authenticated */
  activeUser?: Maybe<User>
  admin: AdminQueries
  /**
   * All the streams of the server. Available to admins only.
   * @deprecated use admin.projectList instead
   */
  adminStreams?: Maybe<StreamCollection>
  /**
   * Get all (or search for specific) users, registered or invited, from the server in a paginated view.
   * The query looks for matches in name, company and email.
   * @deprecated use admin.UserList instead
   */
  adminUsers?: Maybe<AdminUsersListCollection>
  /** Gets a specific app from the server. */
  app?: Maybe<ServerApp>
  /** Returns all the publicly available apps on this server. */
  apps?: Maybe<Array<Maybe<ServerAppListItem>>>
  /** If user is authenticated using an app token, this will describe the app */
  authenticatedAsApp?: Maybe<ServerAppListItem>
  comment?: Maybe<Comment>
  /**
   * This query can be used in the following ways:
   * - get all the comments for a stream: **do not pass in any resource identifiers**.
   * - get the comments targeting any of a set of provided resources (comments/objects): **pass in an array of resources.**
   * @deprecated Use 'commentThreads' fields instead
   */
  comments?: Maybe<CommentCollection>
  /** All of the discoverable streams of the server */
  discoverableStreams?: Maybe<StreamCollection>
  /** Get the (limited) profile information of another server user */
  otherUser?: Maybe<LimitedUser>
  /**
   * Find a specific project. Will throw an authorization error if active user isn't authorized
   * to see it, for example, if a project isn't public and the user doesn't have the appropriate rights.
   */
  project: Project
  /**
   * Look for an invitation to a project, for the current user (authed or not). If token
   * isn't specified, the server will look for any valid invite.
   */
  projectInvite?: Maybe<PendingStreamCollaborator>
  serverInfo: ServerInfo
  /** Receive metadata about an invite by the invite token */
  serverInviteByToken?: Maybe<ServerInvite>
  /** @deprecated use admin.serverStatistics instead */
  serverStats: ServerStats
  /**
   * Returns a specific stream. Will throw an authorization error if active user isn't authorized
   * to see it, for example, if a stream isn't public and the user doesn't have the appropriate rights.
   */
  stream?: Maybe<Stream>
  /** Get authed user's stream access request */
  streamAccessRequest?: Maybe<StreamAccessRequest>
  /**
   * Look for an invitation to a stream, for the current user (authed or not). If token
   * isn't specified, the server will look for any valid invite.
   */
  streamInvite?: Maybe<PendingStreamCollaborator>
  /** Get all invitations to streams that the active user has */
  streamInvites: Array<PendingStreamCollaborator>
  /**
   * Returns all streams that the active user is a collaborator on.
   * Pass in the `query` parameter to search by name, description or ID.
   */
  streams?: Maybe<StreamCollection>
  testList: Array<TestItem>
  testNumber?: Maybe<Scalars['Int']['output']>
  /**
   * Gets the profile of a user. If no id argument is provided, will return the current authenticated user's profile (as extracted from the authorization header).
   * @deprecated To be removed in the near future! Use 'activeUser' to get info about the active user or 'otherUser' to get info about another user.
   */
  user?: Maybe<User>
  /** Validate password strength */
  userPwdStrength: PasswordStrengthCheckResults
  /**
   * Search for users and return limited metadata about them, if you have the server:user role.
   * The query looks for matches in name & email
   */
  userSearch: UserSearchResultCollection
}

export type QueryAdminStreamsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  query?: InputMaybe<Scalars['String']['input']>
  visibility?: InputMaybe<Scalars['String']['input']>
}

export type QueryAdminUsersArgs = {
  limit?: Scalars['Int']['input']
  offset?: Scalars['Int']['input']
  query?: InputMaybe<Scalars['String']['input']>
}

export type QueryAppArgs = {
  id: Scalars['String']['input']
}

export type QueryCommentArgs = {
  id: Scalars['String']['input']
  streamId: Scalars['String']['input']
}

export type QueryCommentsArgs = {
  archived?: Scalars['Boolean']['input']
  cursor?: InputMaybe<Scalars['String']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  resources?: InputMaybe<Array<InputMaybe<ResourceIdentifierInput>>>
  streamId: Scalars['String']['input']
}

export type QueryDiscoverableStreamsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>
  limit?: Scalars['Int']['input']
  sort?: InputMaybe<DiscoverableStreamsSortingInput>
}

export type QueryOtherUserArgs = {
  id: Scalars['String']['input']
}

export type QueryProjectArgs = {
  id: Scalars['String']['input']
}

export type QueryProjectInviteArgs = {
  projectId: Scalars['String']['input']
  token?: InputMaybe<Scalars['String']['input']>
}

export type QueryServerInviteByTokenArgs = {
  token: Scalars['String']['input']
}

export type QueryStreamArgs = {
  id: Scalars['String']['input']
}

export type QueryStreamAccessRequestArgs = {
  streamId: Scalars['String']['input']
}

export type QueryStreamInviteArgs = {
  streamId: Scalars['String']['input']
  token?: InputMaybe<Scalars['String']['input']>
}

export type QueryStreamsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  query?: InputMaybe<Scalars['String']['input']>
}

export type QueryUserArgs = {
  id?: InputMaybe<Scalars['String']['input']>
}

export type QueryUserPwdStrengthArgs = {
  pwd: Scalars['String']['input']
}

export type QueryUserSearchArgs = {
  archived?: InputMaybe<Scalars['Boolean']['input']>
  cursor?: InputMaybe<Scalars['String']['input']>
  emailOnly?: InputMaybe<Scalars['Boolean']['input']>
  limit?: Scalars['Int']['input']
  query: Scalars['String']['input']
}

/** Deprecated: Used by old stream-based mutations */
export type ReplyCreateInput = {
  /** IDs of uploaded blobs that should be attached to this reply */
  blobIds: Array<Scalars['String']['input']>
  data?: InputMaybe<Scalars['JSONObject']['input']>
  parentComment: Scalars['String']['input']
  streamId: Scalars['String']['input']
  /** ProseMirror document object */
  text?: InputMaybe<Scalars['JSONObject']['input']>
}

export type ResourceIdentifier = {
  __typename?: 'ResourceIdentifier'
  resourceId: Scalars['String']['output']
  resourceType: ResourceType
}

export type ResourceIdentifierInput = {
  resourceId: Scalars['String']['input']
  resourceType: ResourceType
}

export enum ResourceType {
  Comment = 'comment',
  Commit = 'commit',
  Object = 'object',
  Stream = 'stream',
}

export type Role = {
  __typename?: 'Role'
  description: Scalars['String']['output']
  name: Scalars['String']['output']
  resourceTarget: Scalars['String']['output']
}

/** Available scopes. */
export type Scope = {
  __typename?: 'Scope'
  description: Scalars['String']['output']
  name: Scalars['String']['output']
}

export type ServerApp = {
  __typename?: 'ServerApp'
  author?: Maybe<AppAuthor>
  createdAt: Scalars['DateTime']['output']
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['String']['output']
  logo?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  public?: Maybe<Scalars['Boolean']['output']>
  redirectUrl: Scalars['String']['output']
  scopes: Array<Scope>
  secret?: Maybe<Scalars['String']['output']>
  termsAndConditionsLink?: Maybe<Scalars['String']['output']>
  trustByDefault?: Maybe<Scalars['Boolean']['output']>
}

export type ServerAppListItem = {
  __typename?: 'ServerAppListItem'
  author?: Maybe<AppAuthor>
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['String']['output']
  logo?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  redirectUrl: Scalars['String']['output']
  termsAndConditionsLink?: Maybe<Scalars['String']['output']>
  trustByDefault?: Maybe<Scalars['Boolean']['output']>
}

/** Information about this server. */
export type ServerInfo = {
  __typename?: 'ServerInfo'
  adminContact?: Maybe<Scalars['String']['output']>
  /** The authentication strategies available on this server. */
  authStrategies: Array<AuthStrategy>
  /** Base URL of Speckle Automate, if set */
  automateUrl?: Maybe<Scalars['String']['output']>
  blobSizeLimitBytes: Scalars['Int']['output']
  canonicalUrl?: Maybe<Scalars['String']['output']>
  company?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  guestModeEnabled: Scalars['Boolean']['output']
  inviteOnly?: Maybe<Scalars['Boolean']['output']>
  name: Scalars['String']['output']
  /** @deprecated Use role constants from the @speckle/shared npm package instead */
  roles: Array<Role>
  scopes: Array<Scope>
  serverRoles: Array<ServerRoleItem>
  termsOfService?: Maybe<Scalars['String']['output']>
  version?: Maybe<Scalars['String']['output']>
}

export type ServerInfoUpdateInput = {
  adminContact?: InputMaybe<Scalars['String']['input']>
  company?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  guestModeEnabled?: InputMaybe<Scalars['Boolean']['input']>
  inviteOnly?: InputMaybe<Scalars['Boolean']['input']>
  name: Scalars['String']['input']
  termsOfService?: InputMaybe<Scalars['String']['input']>
}

export type ServerInvite = {
  __typename?: 'ServerInvite'
  email: Scalars['String']['output']
  id: Scalars['String']['output']
  invitedBy: LimitedUser
}

export type ServerInviteCreateInput = {
  email: Scalars['String']['input']
  message?: InputMaybe<Scalars['String']['input']>
  /** Can only be specified if guest mode is on or if the user is an admin */
  serverRole?: InputMaybe<Scalars['String']['input']>
}

export enum ServerRole {
  ServerAdmin = 'SERVER_ADMIN',
  ServerArchivedUser = 'SERVER_ARCHIVED_USER',
  ServerGuest = 'SERVER_GUEST',
  ServerUser = 'SERVER_USER',
}

export type ServerRoleItem = {
  __typename?: 'ServerRoleItem'
  id: Scalars['String']['output']
  title: Scalars['String']['output']
}

export type ServerStatistics = {
  __typename?: 'ServerStatistics'
  totalPendingInvites: Scalars['Int']['output']
  totalProjectCount: Scalars['Int']['output']
  totalUserCount: Scalars['Int']['output']
}

export type ServerStats = {
  __typename?: 'ServerStats'
  /** An array of objects currently structured as { created_month: Date, count: int }. */
  commitHistory?: Maybe<Array<Maybe<Scalars['JSONObject']['output']>>>
  /** An array of objects currently structured as { created_month: Date, count: int }. */
  objectHistory?: Maybe<Array<Maybe<Scalars['JSONObject']['output']>>>
  /** An array of objects currently structured as { created_month: Date, count: int }. */
  streamHistory?: Maybe<Array<Maybe<Scalars['JSONObject']['output']>>>
  totalCommitCount: Scalars['Int']['output']
  totalObjectCount: Scalars['Int']['output']
  totalStreamCount: Scalars['Int']['output']
  totalUserCount: Scalars['Int']['output']
  /** An array of objects currently structured as { created_month: Date, count: int }. */
  userHistory?: Maybe<Array<Maybe<Scalars['JSONObject']['output']>>>
}

export type SmartTextEditorValue = {
  __typename?: 'SmartTextEditorValue'
  /** File attachments, if any */
  attachments?: Maybe<Array<BlobMetadata>>
  /**
   * The actual (ProseMirror) document representing the text. Can be empty,
   * if there are attachments.
   */
  doc?: Maybe<Scalars['JSONObject']['output']>
  /** The type of editor value (comment, blog post etc.) */
  type: Scalars['String']['output']
  /** The version of the schema */
  version: Scalars['String']['output']
}

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type Stream = {
  __typename?: 'Stream'
  /** All the recent activity on this stream in chronological order */
  activity?: Maybe<ActivityCollection>
  allowPublicComments: Scalars['Boolean']['output']
  blob?: Maybe<BlobMetadata>
  /** Get the metadata collection of blobs stored for this stream. */
  blobs?: Maybe<BlobMetadataCollection>
  branch?: Maybe<Branch>
  branches?: Maybe<BranchCollection>
  collaborators: Array<StreamCollaborator>
  /**
   * The total number of comments for this stream. To actually get the comments, use the comments query without passing in a resource array. E.g.:
   *
   * ```
   * query{
   *   comments(streamId:"streamId"){
   *     ...
   *   }
   * ```
   */
  commentCount: Scalars['Int']['output']
  commit?: Maybe<Commit>
  commits?: Maybe<CommitCollection>
  createdAt: Scalars['DateTime']['output']
  description?: Maybe<Scalars['String']['output']>
  /** Date when you favorited this stream. `null` if stream isn't viewed from a specific user's perspective or if it isn't favorited. */
  favoritedDate?: Maybe<Scalars['DateTime']['output']>
  favoritesCount: Scalars['Int']['output']
  /** Returns a specific file upload that belongs to this stream. */
  fileUpload?: Maybe<FileUpload>
  /** Returns a list of all the file uploads for this stream. */
  fileUploads: Array<FileUpload>
  id: Scalars['String']['output']
  /**
   * Whether the stream (if public) can be found on public stream exploration pages
   * and searches
   */
  isDiscoverable: Scalars['Boolean']['output']
  /** Whether the stream can be viewed by non-contributors */
  isPublic: Scalars['Boolean']['output']
  name: Scalars['String']['output']
  object?: Maybe<Object>
  /** Pending stream access requests */
  pendingAccessRequests?: Maybe<Array<StreamAccessRequest>>
  /** Collaborators who have been invited, but not yet accepted. */
  pendingCollaborators?: Maybe<Array<PendingStreamCollaborator>>
  /** Your role for this stream. `null` if request is not authenticated, or the stream is not explicitly shared with you. */
  role?: Maybe<Scalars['String']['output']>
  size?: Maybe<Scalars['String']['output']>
  updatedAt: Scalars['DateTime']['output']
  webhooks: WebhookCollection
}

export type StreamActivityArgs = {
  actionType?: InputMaybe<Scalars['String']['input']>
  after?: InputMaybe<Scalars['DateTime']['input']>
  before?: InputMaybe<Scalars['DateTime']['input']>
  cursor?: InputMaybe<Scalars['DateTime']['input']>
  limit?: Scalars['Int']['input']
}

export type StreamBlobArgs = {
  id: Scalars['String']['input']
}

export type StreamBlobsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  query?: InputMaybe<Scalars['String']['input']>
}

export type StreamBranchArgs = {
  name?: InputMaybe<Scalars['String']['input']>
}

export type StreamBranchesArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>
  limit?: Scalars['Int']['input']
}

export type StreamCommitArgs = {
  id?: InputMaybe<Scalars['String']['input']>
}

export type StreamCommitsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>
  limit?: Scalars['Int']['input']
}

export type StreamFileUploadArgs = {
  id: Scalars['String']['input']
}

export type StreamObjectArgs = {
  id: Scalars['String']['input']
}

export type StreamWebhooksArgs = {
  id?: InputMaybe<Scalars['String']['input']>
}

/** Created when a user requests to become a contributor on a stream */
export type StreamAccessRequest = {
  __typename?: 'StreamAccessRequest'
  createdAt: Scalars['DateTime']['output']
  id: Scalars['ID']['output']
  requester: LimitedUser
  requesterId: Scalars['String']['output']
  /** Can only be selected if authed user has proper access */
  stream: Stream
  streamId: Scalars['String']['output']
}

export type StreamCollaborator = {
  __typename?: 'StreamCollaborator'
  avatar?: Maybe<Scalars['String']['output']>
  company?: Maybe<Scalars['String']['output']>
  id: Scalars['String']['output']
  name: Scalars['String']['output']
  role: Scalars['String']['output']
  serverRole: Scalars['String']['output']
}

export type StreamCollection = {
  __typename?: 'StreamCollection'
  cursor?: Maybe<Scalars['String']['output']>
  items?: Maybe<Array<Stream>>
  totalCount: Scalars['Int']['output']
}

export type StreamCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>
  /**
   * Whether the stream (if public) can be found on public stream exploration pages
   * and searches
   */
  isDiscoverable?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether the stream can be viewed by non-contributors */
  isPublic?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  /** Optionally specify user IDs of users that you want to invite to be contributors to this stream */
  withContributors?: InputMaybe<Array<Scalars['String']['input']>>
}

export type StreamInviteCreateInput = {
  email?: InputMaybe<Scalars['String']['input']>
  message?: InputMaybe<Scalars['String']['input']>
  /** Defaults to the contributor role, if not specified */
  role?: InputMaybe<Scalars['String']['input']>
  /** Can only be specified if guest mode is on or if the user is an admin */
  serverRole?: InputMaybe<Scalars['String']['input']>
  streamId: Scalars['String']['input']
  userId?: InputMaybe<Scalars['String']['input']>
}

export type StreamRevokePermissionInput = {
  streamId: Scalars['String']['input']
  userId: Scalars['String']['input']
}

export enum StreamRole {
  StreamContributor = 'STREAM_CONTRIBUTOR',
  StreamOwner = 'STREAM_OWNER',
  StreamReviewer = 'STREAM_REVIEWER',
}

export type StreamUpdateInput = {
  allowPublicComments?: InputMaybe<Scalars['Boolean']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  id: Scalars['String']['input']
  /**
   * Whether the stream (if public) can be found on public stream exploration pages
   * and searches
   */
  isDiscoverable?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether the stream can be viewed by non-contributors */
  isPublic?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type StreamUpdatePermissionInput = {
  role: Scalars['String']['input']
  streamId: Scalars['String']['input']
  userId: Scalars['String']['input']
}

export type Subscription = {
  __typename?: 'Subscription'
  /** It's lonely in the void. */
  _?: Maybe<Scalars['String']['output']>
  /** Subscribe to branch created event */
  branchCreated?: Maybe<Scalars['JSONObject']['output']>
  /** Subscribe to branch deleted event */
  branchDeleted?: Maybe<Scalars['JSONObject']['output']>
  /** Subscribe to branch updated event. */
  branchUpdated?: Maybe<Scalars['JSONObject']['output']>
  /**
   * Subscribe to new comment events. There's two ways to use this subscription:
   * - for a whole stream: do not pass in any resourceIds; this sub will get called whenever a comment (not reply) is added to any of the stream's resources.
   * - for a specific resource/set of resources: pass in a list of resourceIds (commit or object ids); this sub will get called when *any* of the resources provided get a comment.
   * @deprecated Use projectCommentsUpdated
   */
  commentActivity: CommentActivityMessage
  /**
   * Subscribes to events on a specific comment. Use to find out when:
   * - a top level comment is deleted (trigger a deletion event outside)
   * - a top level comment receives a reply.
   * @deprecated Use projectCommentsUpdated or viewerUserActivityBroadcasted for reply status
   */
  commentThreadActivity: CommentThreadActivityMessage
  /** Subscribe to commit created event */
  commitCreated?: Maybe<Scalars['JSONObject']['output']>
  /** Subscribe to commit deleted event */
  commitDeleted?: Maybe<Scalars['JSONObject']['output']>
  /** Subscribe to commit updated event. */
  commitUpdated?: Maybe<Scalars['JSONObject']['output']>
  projectAutomationsStatusUpdated: ProjectAutomationsStatusUpdatedMessage
  /**
   * Subscribe to updates to resource comments/threads. Optionally specify resource ID string to only receive
   * updates regarding comments for those resources.
   */
  projectCommentsUpdated: ProjectCommentsUpdatedMessage
  /** Subscribe to changes to any of a project's file imports */
  projectFileImportUpdated: ProjectFileImportUpdatedMessage
  /** Subscribe to changes to a project's models. Optionally specify modelIds to track. */
  projectModelsUpdated: ProjectModelsUpdatedMessage
  /** Subscribe to changes to a project's pending models */
  projectPendingModelsUpdated: ProjectPendingModelsUpdatedMessage
  /** Subscribe to changes to a project's pending versions */
  projectPendingVersionsUpdated: ProjectPendingVersionsUpdatedMessage
  /** Track updates to a specific project */
  projectUpdated: ProjectUpdatedMessage
  /** Subscribe to when a project's versions get their preview image fully generated. */
  projectVersionsPreviewGenerated: ProjectVersionsPreviewGeneratedMessage
  /** Subscribe to changes to a project's versions. */
  projectVersionsUpdated: ProjectVersionsUpdatedMessage
  /** Subscribes to stream deleted event. Use this in clients/components that pertain only to this stream. */
  streamDeleted?: Maybe<Scalars['JSONObject']['output']>
  /** Subscribes to stream updated event. Use this in clients/components that pertain only to this stream. */
  streamUpdated?: Maybe<Scalars['JSONObject']['output']>
  /** Track newly added or deleted projects owned by the active user */
  userProjectsUpdated: UserProjectsUpdatedMessage
  /**
   * Subscribes to new stream added event for your profile. Use this to display an up-to-date list of streams.
   * **NOTE**: If someone shares a stream with you, this subscription will be triggered with an extra value of `sharedBy` in the payload.
   */
  userStreamAdded?: Maybe<Scalars['JSONObject']['output']>
  /**
   * Subscribes to stream removed event for your profile. Use this to display an up-to-date list of streams for your profile.
   * **NOTE**: If someone revokes your permissions on a stream, this subscription will be triggered with an extra value of `revokedBy` in the payload.
   */
  userStreamRemoved?: Maybe<Scalars['JSONObject']['output']>
  /**
   * Broadcasts "real-time" location data for viewer users.
   * @deprecated Use viewerUserActivityBroadcasted
   */
  userViewerActivity?: Maybe<Scalars['JSONObject']['output']>
  /** Track user activities in the viewer relating to the specified resources */
  viewerUserActivityBroadcasted: ViewerUserActivityMessage
}

export type SubscriptionBranchCreatedArgs = {
  streamId: Scalars['String']['input']
}

export type SubscriptionBranchDeletedArgs = {
  streamId: Scalars['String']['input']
}

export type SubscriptionBranchUpdatedArgs = {
  branchId?: InputMaybe<Scalars['String']['input']>
  streamId: Scalars['String']['input']
}

export type SubscriptionCommentActivityArgs = {
  resourceIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  streamId: Scalars['String']['input']
}

export type SubscriptionCommentThreadActivityArgs = {
  commentId: Scalars['String']['input']
  streamId: Scalars['String']['input']
}

export type SubscriptionCommitCreatedArgs = {
  streamId: Scalars['String']['input']
}

export type SubscriptionCommitDeletedArgs = {
  streamId: Scalars['String']['input']
}

export type SubscriptionCommitUpdatedArgs = {
  commitId?: InputMaybe<Scalars['String']['input']>
  streamId: Scalars['String']['input']
}

export type SubscriptionProjectAutomationsStatusUpdatedArgs = {
  projectId: Scalars['String']['input']
}

export type SubscriptionProjectCommentsUpdatedArgs = {
  target: ViewerUpdateTrackingTarget
}

export type SubscriptionProjectFileImportUpdatedArgs = {
  id: Scalars['String']['input']
}

export type SubscriptionProjectModelsUpdatedArgs = {
  id: Scalars['String']['input']
  modelIds?: InputMaybe<Array<Scalars['String']['input']>>
}

export type SubscriptionProjectPendingModelsUpdatedArgs = {
  id: Scalars['String']['input']
}

export type SubscriptionProjectPendingVersionsUpdatedArgs = {
  id: Scalars['String']['input']
}

export type SubscriptionProjectUpdatedArgs = {
  id: Scalars['String']['input']
}

export type SubscriptionProjectVersionsPreviewGeneratedArgs = {
  id: Scalars['String']['input']
}

export type SubscriptionProjectVersionsUpdatedArgs = {
  id: Scalars['String']['input']
}

export type SubscriptionStreamDeletedArgs = {
  streamId?: InputMaybe<Scalars['String']['input']>
}

export type SubscriptionStreamUpdatedArgs = {
  streamId?: InputMaybe<Scalars['String']['input']>
}

export type SubscriptionUserViewerActivityArgs = {
  resourceId: Scalars['String']['input']
  streamId: Scalars['String']['input']
}

export type SubscriptionViewerUserActivityBroadcastedArgs = {
  sessionId?: InputMaybe<Scalars['String']['input']>
  target: ViewerUpdateTrackingTarget
}

export type TestItem = {
  __typename?: 'TestItem'
  bar: Scalars['String']['output']
  foo: Scalars['String']['output']
}

export type UpdateModelInput = {
  description?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
  name?: InputMaybe<Scalars['String']['input']>
  projectId: Scalars['ID']['input']
}

/** Only non-null values will be updated */
export type UpdateVersionInput = {
  message?: InputMaybe<Scalars['String']['input']>
  versionId: Scalars['String']['input']
}

/**
 * Full user type, should only be used in the context of admin operations or
 * when a user is reading/writing info about himself
 */
export type User = {
  __typename?: 'User'
  /** All the recent activity from this user in chronological order */
  activity?: Maybe<ActivityCollection>
  /** Returns a list of your personal api tokens. */
  apiTokens: Array<ApiToken>
  /** Returns the apps you have authorized. */
  authorizedApps?: Maybe<Array<Maybe<ServerAppListItem>>>
  avatar?: Maybe<Scalars['String']['output']>
  bio?: Maybe<Scalars['String']['output']>
  /**
   * Get commits authored by the user. If requested for another user, then only commits
   * from public streams will be returned.
   */
  commits?: Maybe<CommitCollection>
  company?: Maybe<Scalars['String']['output']>
  /** Returns the apps you have created. */
  createdApps?: Maybe<Array<ServerApp>>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  email?: Maybe<Scalars['String']['output']>
  /**
   * All the streams that a active user has favorited.
   * Note: You can't use this to retrieve another user's favorite streams.
   */
  favoriteStreams: StreamCollection
  /** Whether the user has a pending/active email verification token */
  hasPendingVerification?: Maybe<Scalars['Boolean']['output']>
  id: Scalars['ID']['output']
  /** Whether post-sign up onboarding has been finished or skipped entirely */
  isOnboardingFinished?: Maybe<Scalars['Boolean']['output']>
  name: Scalars['String']['output']
  notificationPreferences: Scalars['JSONObject']['output']
  profiles?: Maybe<Scalars['JSONObject']['output']>
  /** Get all invitations to projects that the active user has */
  projectInvites: Array<PendingStreamCollaborator>
  /** Get projects that the user participates in */
  projects: ProjectCollection
  role?: Maybe<Scalars['String']['output']>
  /**
   * Returns all streams that the user is a collaborator on. If requested for a user, who isn't the
   * authenticated user, then this will only return discoverable streams.
   */
  streams: StreamCollection
  /** The user's timeline in chronological order */
  timeline?: Maybe<ActivityCollection>
  /** Total amount of favorites attached to streams owned by the user */
  totalOwnedStreamsFavorites: Scalars['Int']['output']
  verified?: Maybe<Scalars['Boolean']['output']>
}

/**
 * Full user type, should only be used in the context of admin operations or
 * when a user is reading/writing info about himself
 */
export type UserActivityArgs = {
  actionType?: InputMaybe<Scalars['String']['input']>
  after?: InputMaybe<Scalars['DateTime']['input']>
  before?: InputMaybe<Scalars['DateTime']['input']>
  cursor?: InputMaybe<Scalars['DateTime']['input']>
  limit?: Scalars['Int']['input']
}

/**
 * Full user type, should only be used in the context of admin operations or
 * when a user is reading/writing info about himself
 */
export type UserCommitsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>
  limit?: Scalars['Int']['input']
}

/**
 * Full user type, should only be used in the context of admin operations or
 * when a user is reading/writing info about himself
 */
export type UserFavoriteStreamsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>
  limit?: Scalars['Int']['input']
}

/**
 * Full user type, should only be used in the context of admin operations or
 * when a user is reading/writing info about himself
 */
export type UserProjectsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>
  filter?: InputMaybe<UserProjectsFilter>
  limit?: Scalars['Int']['input']
}

/**
 * Full user type, should only be used in the context of admin operations or
 * when a user is reading/writing info about himself
 */
export type UserStreamsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>
  limit?: Scalars['Int']['input']
}

/**
 * Full user type, should only be used in the context of admin operations or
 * when a user is reading/writing info about himself
 */
export type UserTimelineArgs = {
  after?: InputMaybe<Scalars['DateTime']['input']>
  before?: InputMaybe<Scalars['DateTime']['input']>
  cursor?: InputMaybe<Scalars['DateTime']['input']>
  limit?: Scalars['Int']['input']
}

export type UserDeleteInput = {
  email: Scalars['String']['input']
}

export type UserProjectsFilter = {
  /** Only include projects where user has the specified roles */
  onlyWithRoles?: InputMaybe<Array<Scalars['String']['input']>>
  /** Filter out projects by name */
  search?: InputMaybe<Scalars['String']['input']>
}

export type UserProjectsUpdatedMessage = {
  __typename?: 'UserProjectsUpdatedMessage'
  /** Project ID */
  id: Scalars['String']['output']
  /** Project entity, null if project was deleted */
  project?: Maybe<Project>
  /** Message type */
  type: UserProjectsUpdatedMessageType
}

export enum UserProjectsUpdatedMessageType {
  Added = 'ADDED',
  Removed = 'REMOVED',
}

export type UserRoleInput = {
  id: Scalars['String']['input']
  role: Scalars['String']['input']
}

export type UserSearchResultCollection = {
  __typename?: 'UserSearchResultCollection'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<LimitedUser>
}

export type UserUpdateInput = {
  avatar?: InputMaybe<Scalars['String']['input']>
  bio?: InputMaybe<Scalars['String']['input']>
  company?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type Version = {
  __typename?: 'Version'
  authorUser?: Maybe<LimitedUser>
  automationStatus?: Maybe<AutomationsStatus>
  /** All comment threads in this version */
  commentThreads: CommentCollection
  createdAt: Scalars['DateTime']['output']
  id: Scalars['ID']['output']
  message?: Maybe<Scalars['String']['output']>
  model: Model
  previewUrl: Scalars['String']['output']
  referencedObject: Scalars['String']['output']
  sourceApplication?: Maybe<Scalars['String']['output']>
}

export type VersionCommentThreadsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>
  limit?: Scalars['Int']['input']
}

export type VersionCollection = {
  __typename?: 'VersionCollection'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<Version>
  totalCount: Scalars['Int']['output']
}

export type VersionMutations = {
  __typename?: 'VersionMutations'
  delete: Scalars['Boolean']['output']
  moveToModel: Model
  update: Version
}

export type VersionMutationsDeleteArgs = {
  input: DeleteVersionsInput
}

export type VersionMutationsMoveToModelArgs = {
  input: MoveVersionsInput
}

export type VersionMutationsUpdateArgs = {
  input: UpdateVersionInput
}

export type ViewerResourceGroup = {
  __typename?: 'ViewerResourceGroup'
  /** Resource identifier used to refer to a collection of resource items */
  identifier: Scalars['String']['output']
  /** Viewer resources that the identifier refers to */
  items: Array<ViewerResourceItem>
}

export type ViewerResourceItem = {
  __typename?: 'ViewerResourceItem'
  /** Null if resource represents an object */
  modelId?: Maybe<Scalars['String']['output']>
  objectId: Scalars['String']['output']
  /** Null if resource represents an object */
  versionId?: Maybe<Scalars['String']['output']>
}

export type ViewerUpdateTrackingTarget = {
  /**
   * By default if resourceIdString is set, the "versionId" part of model resource identifiers will be ignored
   * and all updates to of all versions of any of the referenced models will be returned. If `loadedVersionsOnly` is
   * enabled, then only updates of loaded/referenced versions in resourceIdString will be returned.
   */
  loadedVersionsOnly?: InputMaybe<Scalars['Boolean']['input']>
  projectId: Scalars['String']['input']
  /**
   * Only request updates to the resources identified by this
   * comma-delimited resouce string (same format that's used in the viewer URL)
   */
  resourceIdString: Scalars['String']['input']
}

export type ViewerUserActivityMessage = {
  __typename?: 'ViewerUserActivityMessage'
  sessionId: Scalars['String']['output']
  /** SerializedViewerState, only null if DISCONNECTED */
  state?: Maybe<Scalars['JSONObject']['output']>
  status: ViewerUserActivityStatus
  user?: Maybe<LimitedUser>
  userId?: Maybe<Scalars['String']['output']>
  userName: Scalars['String']['output']
}

export type ViewerUserActivityMessageInput = {
  sessionId: Scalars['String']['input']
  /** SerializedViewerState, only null if DISCONNECTED */
  state?: InputMaybe<Scalars['JSONObject']['input']>
  status: ViewerUserActivityStatus
  userId?: InputMaybe<Scalars['String']['input']>
  userName: Scalars['String']['input']
}

export enum ViewerUserActivityStatus {
  Disconnected = 'DISCONNECTED',
  Viewing = 'VIEWING',
}

export type Webhook = {
  __typename?: 'Webhook'
  description?: Maybe<Scalars['String']['output']>
  enabled?: Maybe<Scalars['Boolean']['output']>
  hasSecret: Scalars['Boolean']['output']
  history?: Maybe<WebhookEventCollection>
  id: Scalars['String']['output']
  projectId: Scalars['String']['output']
  streamId: Scalars['String']['output']
  triggers: Array<Scalars['String']['output']>
  url: Scalars['String']['output']
}

export type WebhookHistoryArgs = {
  limit?: Scalars['Int']['input']
}

export type WebhookCollection = {
  __typename?: 'WebhookCollection'
  items: Array<Webhook>
  totalCount: Scalars['Int']['output']
}

export type WebhookCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>
  enabled?: InputMaybe<Scalars['Boolean']['input']>
  secret?: InputMaybe<Scalars['String']['input']>
  streamId: Scalars['String']['input']
  triggers: Array<InputMaybe<Scalars['String']['input']>>
  url: Scalars['String']['input']
}

export type WebhookDeleteInput = {
  id: Scalars['String']['input']
  streamId: Scalars['String']['input']
}

export type WebhookEvent = {
  __typename?: 'WebhookEvent'
  id: Scalars['String']['output']
  lastUpdate: Scalars['DateTime']['output']
  payload: Scalars['String']['output']
  retryCount: Scalars['Int']['output']
  status: Scalars['Int']['output']
  statusInfo: Scalars['String']['output']
  webhookId: Scalars['String']['output']
}

export type WebhookEventCollection = {
  __typename?: 'WebhookEventCollection'
  items?: Maybe<Array<Maybe<WebhookEvent>>>
  totalCount?: Maybe<Scalars['Int']['output']>
}

export type WebhookUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>
  enabled?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['String']['input']
  secret?: InputMaybe<Scalars['String']['input']>
  streamId: Scalars['String']['input']
  triggers?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  url?: InputMaybe<Scalars['String']['input']>
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  ActiveUserMutations: ResolverTypeWrapper<ActiveUserMutations>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>
  Activity: ResolverTypeWrapper<Activity>
  String: ResolverTypeWrapper<Scalars['String']['output']>
  ID: ResolverTypeWrapper<Scalars['ID']['output']>
  ActivityCollection: ResolverTypeWrapper<ActivityCollection>
  Int: ResolverTypeWrapper<Scalars['Int']['output']>
  AdminInviteList: ResolverTypeWrapper<AdminInviteList>
  AdminQueries: ResolverTypeWrapper<AdminQueries>
  AdminUserList: ResolverTypeWrapper<AdminUserList>
  AdminUserListItem: ResolverTypeWrapper<AdminUserListItem>
  AdminUsersListCollection: ResolverTypeWrapper<AdminUsersListCollection>
  AdminUsersListItem: ResolverTypeWrapper<AdminUsersListItem>
  ApiToken: ResolverTypeWrapper<ApiToken>
  ApiTokenCreateInput: ApiTokenCreateInput
  AppAuthor: ResolverTypeWrapper<AppAuthor>
  AppCreateInput: AppCreateInput
  AppUpdateInput: AppUpdateInput
  AuthStrategy: ResolverTypeWrapper<AuthStrategy>
  AutomationCreateInput: AutomationCreateInput
  AutomationFunctionRun: ResolverTypeWrapper<AutomationFunctionRun>
  Float: ResolverTypeWrapper<Scalars['Float']['output']>
  AutomationMutations: ResolverTypeWrapper<AutomationMutations>
  AutomationRun: ResolverTypeWrapper<AutomationRun>
  AutomationRunStatus: AutomationRunStatus
  AutomationRunStatusUpdateInput: AutomationRunStatusUpdateInput
  AutomationsStatus: ResolverTypeWrapper<AutomationsStatus>
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>
  BlobMetadata: ResolverTypeWrapper<BlobMetadata>
  BlobMetadataCollection: ResolverTypeWrapper<BlobMetadataCollection>
  Branch: ResolverTypeWrapper<Branch>
  BranchCollection: ResolverTypeWrapper<BranchCollection>
  BranchCreateInput: BranchCreateInput
  BranchDeleteInput: BranchDeleteInput
  BranchUpdateInput: BranchUpdateInput
  Comment: ResolverTypeWrapper<Comment>
  CommentActivityMessage: ResolverTypeWrapper<CommentActivityMessage>
  CommentCollection: ResolverTypeWrapper<CommentCollection>
  CommentContentInput: CommentContentInput
  CommentCreateInput: CommentCreateInput
  CommentDataFilters: ResolverTypeWrapper<CommentDataFilters>
  CommentDataFiltersInput: CommentDataFiltersInput
  CommentEditInput: CommentEditInput
  CommentMutations: ResolverTypeWrapper<CommentMutations>
  CommentReplyAuthorCollection: ResolverTypeWrapper<CommentReplyAuthorCollection>
  CommentThreadActivityMessage: ResolverTypeWrapper<CommentThreadActivityMessage>
  Commit: ResolverTypeWrapper<Commit>
  CommitCollection: ResolverTypeWrapper<CommitCollection>
  CommitCreateInput: CommitCreateInput
  CommitDeleteInput: CommitDeleteInput
  CommitReceivedInput: CommitReceivedInput
  CommitUpdateInput: CommitUpdateInput
  CommitsDeleteInput: CommitsDeleteInput
  CommitsMoveInput: CommitsMoveInput
  CreateCommentInput: CreateCommentInput
  CreateCommentReplyInput: CreateCommentReplyInput
  CreateModelInput: CreateModelInput
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>
  DeleteModelInput: DeleteModelInput
  DeleteVersionsInput: DeleteVersionsInput
  DiscoverableStreamsSortType: DiscoverableStreamsSortType
  DiscoverableStreamsSortingInput: DiscoverableStreamsSortingInput
  EditCommentInput: EditCommentInput
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']['output']>
  FileUpload: ResolverTypeWrapper<FileUpload>
  FunctionRunStatusInput: FunctionRunStatusInput
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']['output']>
  LegacyCommentViewerData: ResolverTypeWrapper<LegacyCommentViewerData>
  LimitedUser: ResolverTypeWrapper<LimitedUser>
  Model: ResolverTypeWrapper<Model>
  ModelCollection: ResolverTypeWrapper<ModelCollection>
  ModelMutations: ResolverTypeWrapper<ModelMutations>
  ModelVersionsFilter: ModelVersionsFilter
  ModelsTreeItem: ResolverTypeWrapper<ModelsTreeItem>
  ModelsTreeItemCollection: ResolverTypeWrapper<ModelsTreeItemCollection>
  MoveVersionsInput: MoveVersionsInput
  Mutation: ResolverTypeWrapper<{}>
  Object: ResolverTypeWrapper<Object>
  ObjectCollection: ResolverTypeWrapper<ObjectCollection>
  ObjectCreateInput: ObjectCreateInput
  PasswordStrengthCheckFeedback: ResolverTypeWrapper<PasswordStrengthCheckFeedback>
  PasswordStrengthCheckResults: ResolverTypeWrapper<PasswordStrengthCheckResults>
  PendingStreamCollaborator: ResolverTypeWrapper<PendingStreamCollaborator>
  Project: ResolverTypeWrapper<Project>
  ProjectAutomationsStatusUpdatedMessage: ResolverTypeWrapper<ProjectAutomationsStatusUpdatedMessage>
  ProjectCollaborator: ResolverTypeWrapper<ProjectCollaborator>
  ProjectCollection: ResolverTypeWrapper<ProjectCollection>
  ProjectCommentCollection: ResolverTypeWrapper<ProjectCommentCollection>
  ProjectCommentsFilter: ProjectCommentsFilter
  ProjectCommentsUpdatedMessage: ResolverTypeWrapper<ProjectCommentsUpdatedMessage>
  ProjectCommentsUpdatedMessageType: ProjectCommentsUpdatedMessageType
  ProjectCreateInput: ProjectCreateInput
  ProjectFileImportUpdatedMessage: ResolverTypeWrapper<ProjectFileImportUpdatedMessage>
  ProjectFileImportUpdatedMessageType: ProjectFileImportUpdatedMessageType
  ProjectInviteCreateInput: ProjectInviteCreateInput
  ProjectInviteMutations: ResolverTypeWrapper<ProjectInviteMutations>
  ProjectInviteUseInput: ProjectInviteUseInput
  ProjectModelsFilter: ProjectModelsFilter
  ProjectModelsTreeFilter: ProjectModelsTreeFilter
  ProjectModelsUpdatedMessage: ResolverTypeWrapper<ProjectModelsUpdatedMessage>
  ProjectModelsUpdatedMessageType: ProjectModelsUpdatedMessageType
  ProjectMutations: ResolverTypeWrapper<ProjectMutations>
  ProjectPendingModelsUpdatedMessage: ResolverTypeWrapper<ProjectPendingModelsUpdatedMessage>
  ProjectPendingModelsUpdatedMessageType: ProjectPendingModelsUpdatedMessageType
  ProjectPendingVersionsUpdatedMessage: ResolverTypeWrapper<ProjectPendingVersionsUpdatedMessage>
  ProjectPendingVersionsUpdatedMessageType: ProjectPendingVersionsUpdatedMessageType
  ProjectUpdateInput: ProjectUpdateInput
  ProjectUpdateRoleInput: ProjectUpdateRoleInput
  ProjectUpdatedMessage: ResolverTypeWrapper<ProjectUpdatedMessage>
  ProjectUpdatedMessageType: ProjectUpdatedMessageType
  ProjectVersionsPreviewGeneratedMessage: ResolverTypeWrapper<ProjectVersionsPreviewGeneratedMessage>
  ProjectVersionsUpdatedMessage: ResolverTypeWrapper<ProjectVersionsUpdatedMessage>
  ProjectVersionsUpdatedMessageType: ProjectVersionsUpdatedMessageType
  ProjectVisibility: ProjectVisibility
  Query: ResolverTypeWrapper<{}>
  ReplyCreateInput: ReplyCreateInput
  ResourceIdentifier: ResolverTypeWrapper<ResourceIdentifier>
  ResourceIdentifierInput: ResourceIdentifierInput
  ResourceType: ResourceType
  Role: ResolverTypeWrapper<Role>
  Scope: ResolverTypeWrapper<Scope>
  ServerApp: ResolverTypeWrapper<ServerApp>
  ServerAppListItem: ResolverTypeWrapper<ServerAppListItem>
  ServerInfo: ResolverTypeWrapper<ServerInfo>
  ServerInfoUpdateInput: ServerInfoUpdateInput
  ServerInvite: ResolverTypeWrapper<ServerInvite>
  ServerInviteCreateInput: ServerInviteCreateInput
  ServerRole: ServerRole
  ServerRoleItem: ResolverTypeWrapper<ServerRoleItem>
  ServerStatistics: ResolverTypeWrapper<ServerStatistics>
  ServerStats: ResolverTypeWrapper<ServerStats>
  SmartTextEditorValue: ResolverTypeWrapper<SmartTextEditorValue>
  SortDirection: SortDirection
  Stream: ResolverTypeWrapper<Stream>
  StreamAccessRequest: ResolverTypeWrapper<StreamAccessRequest>
  StreamCollaborator: ResolverTypeWrapper<StreamCollaborator>
  StreamCollection: ResolverTypeWrapper<StreamCollection>
  StreamCreateInput: StreamCreateInput
  StreamInviteCreateInput: StreamInviteCreateInput
  StreamRevokePermissionInput: StreamRevokePermissionInput
  StreamRole: StreamRole
  StreamUpdateInput: StreamUpdateInput
  StreamUpdatePermissionInput: StreamUpdatePermissionInput
  Subscription: ResolverTypeWrapper<{}>
  TestItem: ResolverTypeWrapper<TestItem>
  UpdateModelInput: UpdateModelInput
  UpdateVersionInput: UpdateVersionInput
  User: ResolverTypeWrapper<User>
  UserDeleteInput: UserDeleteInput
  UserProjectsFilter: UserProjectsFilter
  UserProjectsUpdatedMessage: ResolverTypeWrapper<UserProjectsUpdatedMessage>
  UserProjectsUpdatedMessageType: UserProjectsUpdatedMessageType
  UserRoleInput: UserRoleInput
  UserSearchResultCollection: ResolverTypeWrapper<UserSearchResultCollection>
  UserUpdateInput: UserUpdateInput
  Version: ResolverTypeWrapper<Version>
  VersionCollection: ResolverTypeWrapper<VersionCollection>
  VersionMutations: ResolverTypeWrapper<VersionMutations>
  ViewerResourceGroup: ResolverTypeWrapper<ViewerResourceGroup>
  ViewerResourceItem: ResolverTypeWrapper<ViewerResourceItem>
  ViewerUpdateTrackingTarget: ViewerUpdateTrackingTarget
  ViewerUserActivityMessage: ResolverTypeWrapper<ViewerUserActivityMessage>
  ViewerUserActivityMessageInput: ViewerUserActivityMessageInput
  ViewerUserActivityStatus: ViewerUserActivityStatus
  Webhook: ResolverTypeWrapper<Webhook>
  WebhookCollection: ResolverTypeWrapper<WebhookCollection>
  WebhookCreateInput: WebhookCreateInput
  WebhookDeleteInput: WebhookDeleteInput
  WebhookEvent: ResolverTypeWrapper<WebhookEvent>
  WebhookEventCollection: ResolverTypeWrapper<WebhookEventCollection>
  WebhookUpdateInput: WebhookUpdateInput
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  ActiveUserMutations: ActiveUserMutations
  Boolean: Scalars['Boolean']['output']
  Activity: Activity
  String: Scalars['String']['output']
  ID: Scalars['ID']['output']
  ActivityCollection: ActivityCollection
  Int: Scalars['Int']['output']
  AdminInviteList: AdminInviteList
  AdminQueries: AdminQueries
  AdminUserList: AdminUserList
  AdminUserListItem: AdminUserListItem
  AdminUsersListCollection: AdminUsersListCollection
  AdminUsersListItem: AdminUsersListItem
  ApiToken: ApiToken
  ApiTokenCreateInput: ApiTokenCreateInput
  AppAuthor: AppAuthor
  AppCreateInput: AppCreateInput
  AppUpdateInput: AppUpdateInput
  AuthStrategy: AuthStrategy
  AutomationCreateInput: AutomationCreateInput
  AutomationFunctionRun: AutomationFunctionRun
  Float: Scalars['Float']['output']
  AutomationMutations: AutomationMutations
  AutomationRun: AutomationRun
  AutomationRunStatusUpdateInput: AutomationRunStatusUpdateInput
  AutomationsStatus: AutomationsStatus
  BigInt: Scalars['BigInt']['output']
  BlobMetadata: BlobMetadata
  BlobMetadataCollection: BlobMetadataCollection
  Branch: Branch
  BranchCollection: BranchCollection
  BranchCreateInput: BranchCreateInput
  BranchDeleteInput: BranchDeleteInput
  BranchUpdateInput: BranchUpdateInput
  Comment: Comment
  CommentActivityMessage: CommentActivityMessage
  CommentCollection: CommentCollection
  CommentContentInput: CommentContentInput
  CommentCreateInput: CommentCreateInput
  CommentDataFilters: CommentDataFilters
  CommentDataFiltersInput: CommentDataFiltersInput
  CommentEditInput: CommentEditInput
  CommentMutations: CommentMutations
  CommentReplyAuthorCollection: CommentReplyAuthorCollection
  CommentThreadActivityMessage: CommentThreadActivityMessage
  Commit: Commit
  CommitCollection: CommitCollection
  CommitCreateInput: CommitCreateInput
  CommitDeleteInput: CommitDeleteInput
  CommitReceivedInput: CommitReceivedInput
  CommitUpdateInput: CommitUpdateInput
  CommitsDeleteInput: CommitsDeleteInput
  CommitsMoveInput: CommitsMoveInput
  CreateCommentInput: CreateCommentInput
  CreateCommentReplyInput: CreateCommentReplyInput
  CreateModelInput: CreateModelInput
  DateTime: Scalars['DateTime']['output']
  DeleteModelInput: DeleteModelInput
  DeleteVersionsInput: DeleteVersionsInput
  DiscoverableStreamsSortingInput: DiscoverableStreamsSortingInput
  EditCommentInput: EditCommentInput
  EmailAddress: Scalars['EmailAddress']['output']
  FileUpload: FileUpload
  FunctionRunStatusInput: FunctionRunStatusInput
  JSONObject: Scalars['JSONObject']['output']
  LegacyCommentViewerData: LegacyCommentViewerData
  LimitedUser: LimitedUser
  Model: Model
  ModelCollection: ModelCollection
  ModelMutations: ModelMutations
  ModelVersionsFilter: ModelVersionsFilter
  ModelsTreeItem: ModelsTreeItem
  ModelsTreeItemCollection: ModelsTreeItemCollection
  MoveVersionsInput: MoveVersionsInput
  Mutation: {}
  Object: Object
  ObjectCollection: ObjectCollection
  ObjectCreateInput: ObjectCreateInput
  PasswordStrengthCheckFeedback: PasswordStrengthCheckFeedback
  PasswordStrengthCheckResults: PasswordStrengthCheckResults
  PendingStreamCollaborator: PendingStreamCollaborator
  Project: Project
  ProjectAutomationsStatusUpdatedMessage: ProjectAutomationsStatusUpdatedMessage
  ProjectCollaborator: ProjectCollaborator
  ProjectCollection: ProjectCollection
  ProjectCommentCollection: ProjectCommentCollection
  ProjectCommentsFilter: ProjectCommentsFilter
  ProjectCommentsUpdatedMessage: ProjectCommentsUpdatedMessage
  ProjectCreateInput: ProjectCreateInput
  ProjectFileImportUpdatedMessage: ProjectFileImportUpdatedMessage
  ProjectInviteCreateInput: ProjectInviteCreateInput
  ProjectInviteMutations: ProjectInviteMutations
  ProjectInviteUseInput: ProjectInviteUseInput
  ProjectModelsFilter: ProjectModelsFilter
  ProjectModelsTreeFilter: ProjectModelsTreeFilter
  ProjectModelsUpdatedMessage: ProjectModelsUpdatedMessage
  ProjectMutations: ProjectMutations
  ProjectPendingModelsUpdatedMessage: ProjectPendingModelsUpdatedMessage
  ProjectPendingVersionsUpdatedMessage: ProjectPendingVersionsUpdatedMessage
  ProjectUpdateInput: ProjectUpdateInput
  ProjectUpdateRoleInput: ProjectUpdateRoleInput
  ProjectUpdatedMessage: ProjectUpdatedMessage
  ProjectVersionsPreviewGeneratedMessage: ProjectVersionsPreviewGeneratedMessage
  ProjectVersionsUpdatedMessage: ProjectVersionsUpdatedMessage
  Query: {}
  ReplyCreateInput: ReplyCreateInput
  ResourceIdentifier: ResourceIdentifier
  ResourceIdentifierInput: ResourceIdentifierInput
  Role: Role
  Scope: Scope
  ServerApp: ServerApp
  ServerAppListItem: ServerAppListItem
  ServerInfo: ServerInfo
  ServerInfoUpdateInput: ServerInfoUpdateInput
  ServerInvite: ServerInvite
  ServerInviteCreateInput: ServerInviteCreateInput
  ServerRoleItem: ServerRoleItem
  ServerStatistics: ServerStatistics
  ServerStats: ServerStats
  SmartTextEditorValue: SmartTextEditorValue
  Stream: Stream
  StreamAccessRequest: StreamAccessRequest
  StreamCollaborator: StreamCollaborator
  StreamCollection: StreamCollection
  StreamCreateInput: StreamCreateInput
  StreamInviteCreateInput: StreamInviteCreateInput
  StreamRevokePermissionInput: StreamRevokePermissionInput
  StreamUpdateInput: StreamUpdateInput
  StreamUpdatePermissionInput: StreamUpdatePermissionInput
  Subscription: {}
  TestItem: TestItem
  UpdateModelInput: UpdateModelInput
  UpdateVersionInput: UpdateVersionInput
  User: User
  UserDeleteInput: UserDeleteInput
  UserProjectsFilter: UserProjectsFilter
  UserProjectsUpdatedMessage: UserProjectsUpdatedMessage
  UserRoleInput: UserRoleInput
  UserSearchResultCollection: UserSearchResultCollection
  UserUpdateInput: UserUpdateInput
  Version: Version
  VersionCollection: VersionCollection
  VersionMutations: VersionMutations
  ViewerResourceGroup: ViewerResourceGroup
  ViewerResourceItem: ViewerResourceItem
  ViewerUpdateTrackingTarget: ViewerUpdateTrackingTarget
  ViewerUserActivityMessage: ViewerUserActivityMessage
  ViewerUserActivityMessageInput: ViewerUserActivityMessageInput
  Webhook: Webhook
  WebhookCollection: WebhookCollection
  WebhookCreateInput: WebhookCreateInput
  WebhookDeleteInput: WebhookDeleteInput
  WebhookEvent: WebhookEvent
  WebhookEventCollection: WebhookEventCollection
  WebhookUpdateInput: WebhookUpdateInput
}

export type HasScopeDirectiveArgs = {
  scope: Scalars['String']['input']
}

export type HasScopeDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = HasScopeDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type HasScopesDirectiveArgs = {
  scopes: Array<Maybe<Scalars['String']['input']>>
}

export type HasScopesDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = HasScopesDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type HasServerRoleDirectiveArgs = {
  role: ServerRole
}

export type HasServerRoleDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = HasServerRoleDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type HasStreamRoleDirectiveArgs = {
  role: StreamRole
}

export type HasStreamRoleDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = HasStreamRoleDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type IsOwnerDirectiveArgs = {}

export type IsOwnerDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = IsOwnerDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type ActiveUserMutationsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ActiveUserMutations'] = ResolversParentTypes['ActiveUserMutations'],
> = {
  finishOnboarding?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  update?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<ActiveUserMutationsUpdateArgs, 'user'>
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ActivityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Activity'] = ResolversParentTypes['Activity'],
> = {
  actionType?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  info?: Resolver<ResolversTypes['JSONObject'], ParentType, ContextType>
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  resourceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  resourceType?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  streamId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  time?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ActivityCollectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ActivityCollection'] = ResolversParentTypes['ActivityCollection'],
> = {
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Activity']>>>, ParentType, ContextType>
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type AdminInviteListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AdminInviteList'] = ResolversParentTypes['AdminInviteList'],
> = {
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  items?: Resolver<Array<ResolversTypes['ServerInvite']>, ParentType, ContextType>
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type AdminQueriesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AdminQueries'] = ResolversParentTypes['AdminQueries'],
> = {
  inviteList?: Resolver<
    ResolversTypes['AdminInviteList'],
    ParentType,
    ContextType,
    RequireFields<AdminQueriesInviteListArgs, 'cursor' | 'limit' | 'query'>
  >
  projectList?: Resolver<
    ResolversTypes['ProjectCollection'],
    ParentType,
    ContextType,
    RequireFields<AdminQueriesProjectListArgs, 'cursor' | 'limit'>
  >
  serverStatistics?: Resolver<ResolversTypes['ServerStatistics'], ParentType, ContextType>
  userList?: Resolver<
    ResolversTypes['AdminUserList'],
    ParentType,
    ContextType,
    RequireFields<AdminQueriesUserListArgs, 'cursor' | 'limit' | 'query' | 'role'>
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type AdminUserListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AdminUserList'] = ResolversParentTypes['AdminUserList'],
> = {
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  items?: Resolver<Array<ResolversTypes['AdminUserListItem']>, ParentType, ContextType>
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type AdminUserListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AdminUserListItem'] = ResolversParentTypes['AdminUserListItem'],
> = {
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  verified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type AdminUsersListCollectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['AdminUsersListCollection'] = ResolversParentTypes['AdminUsersListCollection'],
> = {
  items?: Resolver<Array<ResolversTypes['AdminUsersListItem']>, ParentType, ContextType>
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type AdminUsersListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AdminUsersListItem'] = ResolversParentTypes['AdminUsersListItem'],
> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  invitedUser?: Resolver<Maybe<ResolversTypes['ServerInvite']>, ParentType, ContextType>
  registeredUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ApiTokenResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ApiToken'] = ResolversParentTypes['ApiToken'],
> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  lastChars?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  lastUsed?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  lifespan?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  scopes?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type AppAuthorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AppAuthor'] = ResolversParentTypes['AppAuthor'],
> = {
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type AuthStrategyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AuthStrategy'] = ResolversParentTypes['AuthStrategy'],
> = {
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  icon?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type AutomationFunctionRunResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AutomationFunctionRun'] = ResolversParentTypes['AutomationFunctionRun'],
> = {
  contextView?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  elapsed?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  functionId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  functionLogo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  functionName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  resultVersions?: Resolver<Array<ResolversTypes['Version']>, ParentType, ContextType>
  results?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>
  status?: Resolver<ResolversTypes['AutomationRunStatus'], ParentType, ContextType>
  statusMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type AutomationMutationsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AutomationMutations'] = ResolversParentTypes['AutomationMutations'],
> = {
  create?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<AutomationMutationsCreateArgs, 'input'>
  >
  functionRunStatusReport?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<AutomationMutationsFunctionRunStatusReportArgs, 'input'>
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type AutomationRunResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AutomationRun'] = ResolversParentTypes['AutomationRun'],
> = {
  automationId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  automationName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  functionRuns?: Resolver<Array<ResolversTypes['AutomationFunctionRun']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  status?: Resolver<ResolversTypes['AutomationRunStatus'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  versionId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type AutomationsStatusResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AutomationsStatus'] = ResolversParentTypes['AutomationsStatus'],
> = {
  automationRuns?: Resolver<Array<ResolversTypes['AutomationRun']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  status?: Resolver<ResolversTypes['AutomationRunStatus'], ParentType, ContextType>
  statusMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt'
}

export type BlobMetadataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BlobMetadata'] = ResolversParentTypes['BlobMetadata'],
> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  fileHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  fileName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  fileSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  fileType?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  streamId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  uploadError?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  uploadStatus?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type BlobMetadataCollectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BlobMetadataCollection'] = ResolversParentTypes['BlobMetadataCollection'],
> = {
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  items?: Resolver<Maybe<Array<ResolversTypes['BlobMetadata']>>, ParentType, ContextType>
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  totalSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type BranchResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Branch'] = ResolversParentTypes['Branch'],
> = {
  activity?: Resolver<
    Maybe<ResolversTypes['ActivityCollection']>,
    ParentType,
    ContextType,
    RequireFields<BranchActivityArgs, 'limit'>
  >
  author?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  commits?: Resolver<
    Maybe<ResolversTypes['CommitCollection']>,
    ParentType,
    ContextType,
    RequireFields<BranchCommitsArgs, 'limit'>
  >
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type BranchCollectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BranchCollection'] = ResolversParentTypes['BranchCollection'],
> = {
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  items?: Resolver<Maybe<Array<ResolversTypes['Branch']>>, ParentType, ContextType>
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CommentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment'],
> = {
  archived?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  author?: Resolver<ResolversTypes['LimitedUser'], ParentType, ContextType>
  authorId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  data?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>
  hasParent?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  parent?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType>
  rawText?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  reactions?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  replies?: Resolver<
    ResolversTypes['CommentCollection'],
    ParentType,
    ContextType,
    RequireFields<CommentRepliesArgs, 'limit'>
  >
  replyAuthors?: Resolver<
    ResolversTypes['CommentReplyAuthorCollection'],
    ParentType,
    ContextType,
    RequireFields<CommentReplyAuthorsArgs, 'limit'>
  >
  resources?: Resolver<Array<ResolversTypes['ResourceIdentifier']>, ParentType, ContextType>
  screenshot?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  text?: Resolver<ResolversTypes['SmartTextEditorValue'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  viewedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>
  viewerResources?: Resolver<Array<ResolversTypes['ViewerResourceItem']>, ParentType, ContextType>
  viewerState?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CommentActivityMessageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CommentActivityMessage'] = ResolversParentTypes['CommentActivityMessage'],
> = {
  comment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType>
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CommentCollectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CommentCollection'] = ResolversParentTypes['CommentCollection'],
> = {
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  items?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType>
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CommentDataFiltersResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CommentDataFilters'] = ResolversParentTypes['CommentDataFilters'],
> = {
  hiddenIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>
  isolatedIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>
  passMax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  passMin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  propertyInfoKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  sectionBox?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CommentMutationsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CommentMutations'] = ResolversParentTypes['CommentMutations'],
> = {
  archive?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<CommentMutationsArchiveArgs, 'archived' | 'commentId'>
  >
  create?: Resolver<
    ResolversTypes['Comment'],
    ParentType,
    ContextType,
    RequireFields<CommentMutationsCreateArgs, 'input'>
  >
  edit?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<CommentMutationsEditArgs, 'input'>>
  markViewed?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<CommentMutationsMarkViewedArgs, 'commentId'>
  >
  reply?: Resolver<
    ResolversTypes['Comment'],
    ParentType,
    ContextType,
    RequireFields<CommentMutationsReplyArgs, 'input'>
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CommentReplyAuthorCollectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CommentReplyAuthorCollection'] = ResolversParentTypes['CommentReplyAuthorCollection'],
> = {
  items?: Resolver<Array<ResolversTypes['LimitedUser']>, ParentType, ContextType>
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CommentThreadActivityMessageResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CommentThreadActivityMessage'] = ResolversParentTypes['CommentThreadActivityMessage'],
> = {
  data?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>
  reply?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType>
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CommitResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Commit'] = ResolversParentTypes['Commit'],
> = {
  activity?: Resolver<
    Maybe<ResolversTypes['ActivityCollection']>,
    ParentType,
    ContextType,
    RequireFields<CommitActivityArgs, 'limit'>
  >
  authorAvatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  authorId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  branch?: Resolver<Maybe<ResolversTypes['Branch']>, ParentType, ContextType>
  branchName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  commentCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  parents?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  referencedObject?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  sourceApplication?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  stream?: Resolver<ResolversTypes['Stream'], ParentType, ContextType>
  streamId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  streamName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  totalChildrenCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CommitCollectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CommitCollection'] = ResolversParentTypes['CommitCollection'],
> = {
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  items?: Resolver<Maybe<Array<ResolversTypes['Commit']>>, ParentType, ContextType>
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export interface EmailAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress'
}

export type FileUploadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FileUpload'] = ResolversParentTypes['FileUpload'],
> = {
  branchName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  convertedCommitId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  convertedLastUpdate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  convertedMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  convertedStatus?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  convertedVersionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  fileName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  fileSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  fileType?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  model?: Resolver<Maybe<ResolversTypes['Model']>, ParentType, ContextType>
  modelName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  projectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  streamId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  uploadComplete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  uploadDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject'
}

export type LegacyCommentViewerDataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LegacyCommentViewerData'] = ResolversParentTypes['LegacyCommentViewerData'],
> = {
  camPos?: Resolver<Array<ResolversTypes['Float']>, ParentType, ContextType>
  filters?: Resolver<ResolversTypes['CommentDataFilters'], ParentType, ContextType>
  location?: Resolver<ResolversTypes['JSONObject'], ParentType, ContextType>
  sectionBox?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>
  selection?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type LimitedUserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LimitedUser'] = ResolversParentTypes['LimitedUser'],
> = {
  activity?: Resolver<
    Maybe<ResolversTypes['ActivityCollection']>,
    ParentType,
    ContextType,
    RequireFields<LimitedUserActivityArgs, 'limit'>
  >
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  commits?: Resolver<
    Maybe<ResolversTypes['CommitCollection']>,
    ParentType,
    ContextType,
    RequireFields<LimitedUserCommitsArgs, 'limit'>
  >
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  streams?: Resolver<
    ResolversTypes['StreamCollection'],
    ParentType,
    ContextType,
    RequireFields<LimitedUserStreamsArgs, 'limit'>
  >
  timeline?: Resolver<
    Maybe<ResolversTypes['ActivityCollection']>,
    ParentType,
    ContextType,
    RequireFields<LimitedUserTimelineArgs, 'limit'>
  >
  totalOwnedStreamsFavorites?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  verified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ModelResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Model'] = ResolversParentTypes['Model'],
> = {
  author?: Resolver<ResolversTypes['LimitedUser'], ParentType, ContextType>
  automationStatus?: Resolver<Maybe<ResolversTypes['AutomationsStatus']>, ParentType, ContextType>
  childrenTree?: Resolver<Array<ResolversTypes['ModelsTreeItem']>, ParentType, ContextType>
  commentThreads?: Resolver<
    ResolversTypes['CommentCollection'],
    ParentType,
    ContextType,
    RequireFields<ModelCommentThreadsArgs, 'limit'>
  >
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  pendingImportedVersions?: Resolver<
    Array<ResolversTypes['FileUpload']>,
    ParentType,
    ContextType,
    RequireFields<ModelPendingImportedVersionsArgs, 'limit'>
  >
  previewUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  version?: Resolver<ResolversTypes['Version'], ParentType, ContextType, RequireFields<ModelVersionArgs, 'id'>>
  versions?: Resolver<
    ResolversTypes['VersionCollection'],
    ParentType,
    ContextType,
    RequireFields<ModelVersionsArgs, 'limit'>
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ModelCollectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ModelCollection'] = ResolversParentTypes['ModelCollection'],
> = {
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  items?: Resolver<Array<ResolversTypes['Model']>, ParentType, ContextType>
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ModelMutationsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ModelMutations'] = ResolversParentTypes['ModelMutations'],
> = {
  create?: Resolver<ResolversTypes['Model'], ParentType, ContextType, RequireFields<ModelMutationsCreateArgs, 'input'>>
  delete?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<ModelMutationsDeleteArgs, 'input'>
  >
  update?: Resolver<ResolversTypes['Model'], ParentType, ContextType, RequireFields<ModelMutationsUpdateArgs, 'input'>>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ModelsTreeItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ModelsTreeItem'] = ResolversParentTypes['ModelsTreeItem'],
> = {
  children?: Resolver<Array<ResolversTypes['ModelsTreeItem']>, ParentType, ContextType>
  fullName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  hasChildren?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  model?: Resolver<Maybe<ResolversTypes['Model']>, ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ModelsTreeItemCollectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ModelsTreeItemCollection'] = ResolversParentTypes['ModelsTreeItemCollection'],
> = {
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  items?: Resolver<Array<ResolversTypes['ModelsTreeItem']>, ParentType, ContextType>
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  _?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  activeUserMutations?: Resolver<ResolversTypes['ActiveUserMutations'], ParentType, ContextType>
  adminDeleteUser?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationAdminDeleteUserArgs, 'userConfirmation'>
  >
  apiTokenCreate?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationApiTokenCreateArgs, 'token'>
  >
  apiTokenRevoke?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationApiTokenRevokeArgs, 'token'>
  >
  appCreate?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationAppCreateArgs, 'app'>>
  appDelete?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationAppDeleteArgs, 'appId'>
  >
  appRevokeAccess?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<MutationAppRevokeAccessArgs, 'appId'>
  >
  appTokenCreate?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationAppTokenCreateArgs, 'token'>
  >
  appUpdate?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAppUpdateArgs, 'app'>>
  automationMutations?: Resolver<ResolversTypes['AutomationMutations'], ParentType, ContextType>
  branchCreate?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationBranchCreateArgs, 'branch'>
  >
  branchDelete?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationBranchDeleteArgs, 'branch'>
  >
  branchUpdate?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationBranchUpdateArgs, 'branch'>
  >
  broadcastViewerUserActivity?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationBroadcastViewerUserActivityArgs, 'message' | 'projectId' | 'resourceIdString'>
  >
  commentArchive?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationCommentArchiveArgs, 'archived' | 'commentId' | 'streamId'>
  >
  commentCreate?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationCommentCreateArgs, 'input'>
  >
  commentEdit?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationCommentEditArgs, 'input'>
  >
  commentMutations?: Resolver<ResolversTypes['CommentMutations'], ParentType, ContextType>
  commentReply?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationCommentReplyArgs, 'input'>
  >
  commentView?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationCommentViewArgs, 'commentId' | 'streamId'>
  >
  commitCreate?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationCommitCreateArgs, 'commit'>
  >
  commitDelete?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationCommitDeleteArgs, 'commit'>
  >
  commitReceive?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationCommitReceiveArgs, 'input'>
  >
  commitUpdate?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationCommitUpdateArgs, 'commit'>
  >
  commitsDelete?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationCommitsDeleteArgs, 'input'>
  >
  commitsMove?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationCommitsMoveArgs, 'input'>
  >
  inviteDelete?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationInviteDeleteArgs, 'inviteId'>
  >
  inviteResend?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationInviteResendArgs, 'inviteId'>
  >
  modelMutations?: Resolver<ResolversTypes['ModelMutations'], ParentType, ContextType>
  objectCreate?: Resolver<
    Array<Maybe<ResolversTypes['String']>>,
    ParentType,
    ContextType,
    RequireFields<MutationObjectCreateArgs, 'objectInput'>
  >
  projectMutations?: Resolver<ResolversTypes['ProjectMutations'], ParentType, ContextType>
  requestVerification?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  requestVerificationByEmail?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationRequestVerificationByEmailArgs, 'email'>
  >
  serverInfoUpdate?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<MutationServerInfoUpdateArgs, 'info'>
  >
  serverInviteBatchCreate?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationServerInviteBatchCreateArgs, 'input'>
  >
  serverInviteCreate?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationServerInviteCreateArgs, 'input'>
  >
  streamAccessRequestCreate?: Resolver<
    ResolversTypes['StreamAccessRequest'],
    ParentType,
    ContextType,
    RequireFields<MutationStreamAccessRequestCreateArgs, 'streamId'>
  >
  streamAccessRequestUse?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationStreamAccessRequestUseArgs, 'accept' | 'requestId' | 'role'>
  >
  streamCreate?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<MutationStreamCreateArgs, 'stream'>
  >
  streamDelete?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationStreamDeleteArgs, 'id'>
  >
  streamFavorite?: Resolver<
    Maybe<ResolversTypes['Stream']>,
    ParentType,
    ContextType,
    RequireFields<MutationStreamFavoriteArgs, 'favorited' | 'streamId'>
  >
  streamInviteBatchCreate?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationStreamInviteBatchCreateArgs, 'input'>
  >
  streamInviteCancel?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationStreamInviteCancelArgs, 'inviteId' | 'streamId'>
  >
  streamInviteCreate?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationStreamInviteCreateArgs, 'input'>
  >
  streamInviteUse?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationStreamInviteUseArgs, 'accept' | 'streamId' | 'token'>
  >
  streamLeave?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationStreamLeaveArgs, 'streamId'>
  >
  streamRevokePermission?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<MutationStreamRevokePermissionArgs, 'permissionParams'>
  >
  streamUpdate?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationStreamUpdateArgs, 'stream'>
  >
  streamUpdatePermission?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<MutationStreamUpdatePermissionArgs, 'permissionParams'>
  >
  streamsDelete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, Partial<MutationStreamsDeleteArgs>>
  userCommentThreadActivityBroadcast?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationUserCommentThreadActivityBroadcastArgs, 'commentId' | 'streamId'>
  >
  userDelete?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationUserDeleteArgs, 'userConfirmation'>
  >
  userNotificationPreferencesUpdate?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<MutationUserNotificationPreferencesUpdateArgs, 'preferences'>
  >
  userRoleChange?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationUserRoleChangeArgs, 'userRoleInput'>
  >
  userUpdate?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationUserUpdateArgs, 'user'>
  >
  userViewerActivityBroadcast?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationUserViewerActivityBroadcastArgs, 'resourceId' | 'streamId'>
  >
  versionMutations?: Resolver<ResolversTypes['VersionMutations'], ParentType, ContextType>
  webhookCreate?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationWebhookCreateArgs, 'webhook'>
  >
  webhookDelete?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationWebhookDeleteArgs, 'webhook'>
  >
  webhookUpdate?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationWebhookUpdateArgs, 'webhook'>
  >
}

export type ObjectResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Object'] = ResolversParentTypes['Object'],
> = {
  applicationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  children?: Resolver<
    ResolversTypes['ObjectCollection'],
    ParentType,
    ContextType,
    RequireFields<ObjectChildrenArgs, 'depth' | 'limit'>
  >
  commentCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>
  data?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  speckleType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  totalChildrenCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ObjectCollectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ObjectCollection'] = ResolversParentTypes['ObjectCollection'],
> = {
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  objects?: Resolver<Array<Maybe<ResolversTypes['Object']>>, ParentType, ContextType>
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type PasswordStrengthCheckFeedbackResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PasswordStrengthCheckFeedback'] = ResolversParentTypes['PasswordStrengthCheckFeedback'],
> = {
  suggestions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>
  warning?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type PasswordStrengthCheckResultsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PasswordStrengthCheckResults'] = ResolversParentTypes['PasswordStrengthCheckResults'],
> = {
  feedback?: Resolver<ResolversTypes['PasswordStrengthCheckFeedback'], ParentType, ContextType>
  score?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type PendingStreamCollaboratorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PendingStreamCollaborator'] = ResolversParentTypes['PendingStreamCollaborator'],
> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  inviteId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  invitedBy?: Resolver<ResolversTypes['LimitedUser'], ParentType, ContextType>
  projectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  projectName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  streamId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  streamName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  user?: Resolver<Maybe<ResolversTypes['LimitedUser']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ProjectResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project'],
> = {
  allowPublicComments?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  commentThreads?: Resolver<
    ResolversTypes['ProjectCommentCollection'],
    ParentType,
    ContextType,
    RequireFields<ProjectCommentThreadsArgs, 'limit'>
  >
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  invitedTeam?: Resolver<Maybe<Array<ResolversTypes['PendingStreamCollaborator']>>, ParentType, ContextType>
  model?: Resolver<ResolversTypes['Model'], ParentType, ContextType, RequireFields<ProjectModelArgs, 'id'>>
  modelChildrenTree?: Resolver<
    Array<ResolversTypes['ModelsTreeItem']>,
    ParentType,
    ContextType,
    RequireFields<ProjectModelChildrenTreeArgs, 'fullName'>
  >
  models?: Resolver<
    ResolversTypes['ModelCollection'],
    ParentType,
    ContextType,
    RequireFields<ProjectModelsArgs, 'limit'>
  >
  modelsTree?: Resolver<
    ResolversTypes['ModelsTreeItemCollection'],
    ParentType,
    ContextType,
    RequireFields<ProjectModelsTreeArgs, 'limit'>
  >
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  pendingImportedModels?: Resolver<
    Array<ResolversTypes['FileUpload']>,
    ParentType,
    ContextType,
    RequireFields<ProjectPendingImportedModelsArgs, 'limit'>
  >
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  sourceApps?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>
  team?: Resolver<Array<ResolversTypes['ProjectCollaborator']>, ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  versions?: Resolver<
    ResolversTypes['VersionCollection'],
    ParentType,
    ContextType,
    RequireFields<ProjectVersionsArgs, 'limit'>
  >
  viewerResources?: Resolver<
    Array<ResolversTypes['ViewerResourceGroup']>,
    ParentType,
    ContextType,
    RequireFields<ProjectViewerResourcesArgs, 'loadedVersionsOnly' | 'resourceIdString'>
  >
  visibility?: Resolver<ResolversTypes['ProjectVisibility'], ParentType, ContextType>
  webhooks?: Resolver<ResolversTypes['WebhookCollection'], ParentType, ContextType, Partial<ProjectWebhooksArgs>>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ProjectAutomationsStatusUpdatedMessageResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ProjectAutomationsStatusUpdatedMessage'] = ResolversParentTypes['ProjectAutomationsStatusUpdatedMessage'],
> = {
  model?: Resolver<ResolversTypes['Model'], ParentType, ContextType>
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>
  status?: Resolver<ResolversTypes['AutomationsStatus'], ParentType, ContextType>
  version?: Resolver<ResolversTypes['Version'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ProjectCollaboratorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProjectCollaborator'] = ResolversParentTypes['ProjectCollaborator'],
> = {
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  user?: Resolver<ResolversTypes['LimitedUser'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ProjectCollectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProjectCollection'] = ResolversParentTypes['ProjectCollection'],
> = {
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  items?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType>
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ProjectCommentCollectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ProjectCommentCollection'] = ResolversParentTypes['ProjectCommentCollection'],
> = {
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  items?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType>
  totalArchivedCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ProjectCommentsUpdatedMessageResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ProjectCommentsUpdatedMessage'] = ResolversParentTypes['ProjectCommentsUpdatedMessage'],
> = {
  comment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  type?: Resolver<ResolversTypes['ProjectCommentsUpdatedMessageType'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ProjectFileImportUpdatedMessageResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ProjectFileImportUpdatedMessage'] = ResolversParentTypes['ProjectFileImportUpdatedMessage'],
> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  type?: Resolver<ResolversTypes['ProjectFileImportUpdatedMessageType'], ParentType, ContextType>
  upload?: Resolver<ResolversTypes['FileUpload'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ProjectInviteMutationsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProjectInviteMutations'] = ResolversParentTypes['ProjectInviteMutations'],
> = {
  batchCreate?: Resolver<
    ResolversTypes['Project'],
    ParentType,
    ContextType,
    RequireFields<ProjectInviteMutationsBatchCreateArgs, 'input' | 'projectId'>
  >
  cancel?: Resolver<
    ResolversTypes['Project'],
    ParentType,
    ContextType,
    RequireFields<ProjectInviteMutationsCancelArgs, 'inviteId' | 'projectId'>
  >
  create?: Resolver<
    ResolversTypes['Project'],
    ParentType,
    ContextType,
    RequireFields<ProjectInviteMutationsCreateArgs, 'input' | 'projectId'>
  >
  use?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<ProjectInviteMutationsUseArgs, 'input'>
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ProjectModelsUpdatedMessageResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ProjectModelsUpdatedMessage'] = ResolversParentTypes['ProjectModelsUpdatedMessage'],
> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  model?: Resolver<Maybe<ResolversTypes['Model']>, ParentType, ContextType>
  type?: Resolver<ResolversTypes['ProjectModelsUpdatedMessageType'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ProjectMutationsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProjectMutations'] = ResolversParentTypes['ProjectMutations'],
> = {
  create?: Resolver<ResolversTypes['Project'], ParentType, ContextType, Partial<ProjectMutationsCreateArgs>>
  createForOnboarding?: Resolver<ResolversTypes['Project'], ParentType, ContextType>
  delete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<ProjectMutationsDeleteArgs, 'id'>>
  invites?: Resolver<ResolversTypes['ProjectInviteMutations'], ParentType, ContextType>
  leave?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<ProjectMutationsLeaveArgs, 'id'>>
  update?: Resolver<
    ResolversTypes['Project'],
    ParentType,
    ContextType,
    RequireFields<ProjectMutationsUpdateArgs, 'update'>
  >
  updateRole?: Resolver<
    ResolversTypes['Project'],
    ParentType,
    ContextType,
    RequireFields<ProjectMutationsUpdateRoleArgs, 'input'>
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ProjectPendingModelsUpdatedMessageResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ProjectPendingModelsUpdatedMessage'] = ResolversParentTypes['ProjectPendingModelsUpdatedMessage'],
> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  model?: Resolver<ResolversTypes['FileUpload'], ParentType, ContextType>
  type?: Resolver<ResolversTypes['ProjectPendingModelsUpdatedMessageType'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ProjectPendingVersionsUpdatedMessageResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ProjectPendingVersionsUpdatedMessage'] = ResolversParentTypes['ProjectPendingVersionsUpdatedMessage'],
> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  type?: Resolver<ResolversTypes['ProjectPendingVersionsUpdatedMessageType'], ParentType, ContextType>
  version?: Resolver<ResolversTypes['FileUpload'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ProjectUpdatedMessageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProjectUpdatedMessage'] = ResolversParentTypes['ProjectUpdatedMessage'],
> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>
  type?: Resolver<ResolversTypes['ProjectUpdatedMessageType'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ProjectVersionsPreviewGeneratedMessageResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ProjectVersionsPreviewGeneratedMessage'] = ResolversParentTypes['ProjectVersionsPreviewGeneratedMessage'],
> = {
  objectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  projectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  versionId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ProjectVersionsUpdatedMessageResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ProjectVersionsUpdatedMessage'] = ResolversParentTypes['ProjectVersionsUpdatedMessage'],
> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  modelId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  type?: Resolver<ResolversTypes['ProjectVersionsUpdatedMessageType'], ParentType, ContextType>
  version?: Resolver<Maybe<ResolversTypes['Version']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  _?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  activeUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  admin?: Resolver<ResolversTypes['AdminQueries'], ParentType, ContextType>
  adminStreams?: Resolver<
    Maybe<ResolversTypes['StreamCollection']>,
    ParentType,
    ContextType,
    RequireFields<QueryAdminStreamsArgs, 'limit' | 'offset'>
  >
  adminUsers?: Resolver<
    Maybe<ResolversTypes['AdminUsersListCollection']>,
    ParentType,
    ContextType,
    RequireFields<QueryAdminUsersArgs, 'limit' | 'offset' | 'query'>
  >
  app?: Resolver<Maybe<ResolversTypes['ServerApp']>, ParentType, ContextType, RequireFields<QueryAppArgs, 'id'>>
  apps?: Resolver<Maybe<Array<Maybe<ResolversTypes['ServerAppListItem']>>>, ParentType, ContextType>
  authenticatedAsApp?: Resolver<Maybe<ResolversTypes['ServerAppListItem']>, ParentType, ContextType>
  comment?: Resolver<
    Maybe<ResolversTypes['Comment']>,
    ParentType,
    ContextType,
    RequireFields<QueryCommentArgs, 'id' | 'streamId'>
  >
  comments?: Resolver<
    Maybe<ResolversTypes['CommentCollection']>,
    ParentType,
    ContextType,
    RequireFields<QueryCommentsArgs, 'archived' | 'limit' | 'streamId'>
  >
  discoverableStreams?: Resolver<
    Maybe<ResolversTypes['StreamCollection']>,
    ParentType,
    ContextType,
    RequireFields<QueryDiscoverableStreamsArgs, 'limit'>
  >
  otherUser?: Resolver<
    Maybe<ResolversTypes['LimitedUser']>,
    ParentType,
    ContextType,
    RequireFields<QueryOtherUserArgs, 'id'>
  >
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<QueryProjectArgs, 'id'>>
  projectInvite?: Resolver<
    Maybe<ResolversTypes['PendingStreamCollaborator']>,
    ParentType,
    ContextType,
    RequireFields<QueryProjectInviteArgs, 'projectId'>
  >
  serverInfo?: Resolver<ResolversTypes['ServerInfo'], ParentType, ContextType>
  serverInviteByToken?: Resolver<
    Maybe<ResolversTypes['ServerInvite']>,
    ParentType,
    ContextType,
    RequireFields<QueryServerInviteByTokenArgs, 'token'>
  >
  serverStats?: Resolver<ResolversTypes['ServerStats'], ParentType, ContextType>
  stream?: Resolver<Maybe<ResolversTypes['Stream']>, ParentType, ContextType, RequireFields<QueryStreamArgs, 'id'>>
  streamAccessRequest?: Resolver<
    Maybe<ResolversTypes['StreamAccessRequest']>,
    ParentType,
    ContextType,
    RequireFields<QueryStreamAccessRequestArgs, 'streamId'>
  >
  streamInvite?: Resolver<
    Maybe<ResolversTypes['PendingStreamCollaborator']>,
    ParentType,
    ContextType,
    RequireFields<QueryStreamInviteArgs, 'streamId'>
  >
  streamInvites?: Resolver<Array<ResolversTypes['PendingStreamCollaborator']>, ParentType, ContextType>
  streams?: Resolver<
    Maybe<ResolversTypes['StreamCollection']>,
    ParentType,
    ContextType,
    RequireFields<QueryStreamsArgs, 'limit'>
  >
  testList?: Resolver<Array<ResolversTypes['TestItem']>, ParentType, ContextType>
  testNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryUserArgs>>
  userPwdStrength?: Resolver<
    ResolversTypes['PasswordStrengthCheckResults'],
    ParentType,
    ContextType,
    RequireFields<QueryUserPwdStrengthArgs, 'pwd'>
  >
  userSearch?: Resolver<
    ResolversTypes['UserSearchResultCollection'],
    ParentType,
    ContextType,
    RequireFields<QueryUserSearchArgs, 'archived' | 'emailOnly' | 'limit' | 'query'>
  >
}

export type ResourceIdentifierResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ResourceIdentifier'] = ResolversParentTypes['ResourceIdentifier'],
> = {
  resourceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  resourceType?: Resolver<ResolversTypes['ResourceType'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type RoleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Role'] = ResolversParentTypes['Role'],
> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  resourceTarget?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ScopeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Scope'] = ResolversParentTypes['Scope'],
> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ServerAppResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ServerApp'] = ResolversParentTypes['ServerApp'],
> = {
  author?: Resolver<Maybe<ResolversTypes['AppAuthor']>, ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  public?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  redirectUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  scopes?: Resolver<Array<ResolversTypes['Scope']>, ParentType, ContextType>
  secret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  termsAndConditionsLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  trustByDefault?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ServerAppListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ServerAppListItem'] = ResolversParentTypes['ServerAppListItem'],
> = {
  author?: Resolver<Maybe<ResolversTypes['AppAuthor']>, ParentType, ContextType>
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  redirectUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  termsAndConditionsLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  trustByDefault?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ServerInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ServerInfo'] = ResolversParentTypes['ServerInfo'],
> = {
  adminContact?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  authStrategies?: Resolver<Array<ResolversTypes['AuthStrategy']>, ParentType, ContextType>
  automateUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  blobSizeLimitBytes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  guestModeEnabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  inviteOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  roles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>
  scopes?: Resolver<Array<ResolversTypes['Scope']>, ParentType, ContextType>
  serverRoles?: Resolver<Array<ResolversTypes['ServerRoleItem']>, ParentType, ContextType>
  termsOfService?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ServerInviteResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ServerInvite'] = ResolversParentTypes['ServerInvite'],
> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  invitedBy?: Resolver<ResolversTypes['LimitedUser'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ServerRoleItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ServerRoleItem'] = ResolversParentTypes['ServerRoleItem'],
> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ServerStatisticsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ServerStatistics'] = ResolversParentTypes['ServerStatistics'],
> = {
  totalPendingInvites?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  totalProjectCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  totalUserCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ServerStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ServerStats'] = ResolversParentTypes['ServerStats'],
> = {
  commitHistory?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSONObject']>>>, ParentType, ContextType>
  objectHistory?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSONObject']>>>, ParentType, ContextType>
  streamHistory?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSONObject']>>>, ParentType, ContextType>
  totalCommitCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  totalObjectCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  totalStreamCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  totalUserCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  userHistory?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSONObject']>>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type SmartTextEditorValueResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SmartTextEditorValue'] = ResolversParentTypes['SmartTextEditorValue'],
> = {
  attachments?: Resolver<Maybe<Array<ResolversTypes['BlobMetadata']>>, ParentType, ContextType>
  doc?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  version?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type StreamResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Stream'] = ResolversParentTypes['Stream'],
> = {
  activity?: Resolver<
    Maybe<ResolversTypes['ActivityCollection']>,
    ParentType,
    ContextType,
    RequireFields<StreamActivityArgs, 'limit'>
  >
  allowPublicComments?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  blob?: Resolver<Maybe<ResolversTypes['BlobMetadata']>, ParentType, ContextType, RequireFields<StreamBlobArgs, 'id'>>
  blobs?: Resolver<
    Maybe<ResolversTypes['BlobMetadataCollection']>,
    ParentType,
    ContextType,
    RequireFields<StreamBlobsArgs, 'cursor' | 'limit' | 'query'>
  >
  branch?: Resolver<Maybe<ResolversTypes['Branch']>, ParentType, ContextType, RequireFields<StreamBranchArgs, 'name'>>
  branches?: Resolver<
    Maybe<ResolversTypes['BranchCollection']>,
    ParentType,
    ContextType,
    RequireFields<StreamBranchesArgs, 'limit'>
  >
  collaborators?: Resolver<Array<ResolversTypes['StreamCollaborator']>, ParentType, ContextType>
  commentCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  commit?: Resolver<Maybe<ResolversTypes['Commit']>, ParentType, ContextType, Partial<StreamCommitArgs>>
  commits?: Resolver<
    Maybe<ResolversTypes['CommitCollection']>,
    ParentType,
    ContextType,
    RequireFields<StreamCommitsArgs, 'limit'>
  >
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  favoritedDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>
  favoritesCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  fileUpload?: Resolver<
    Maybe<ResolversTypes['FileUpload']>,
    ParentType,
    ContextType,
    RequireFields<StreamFileUploadArgs, 'id'>
  >
  fileUploads?: Resolver<Array<ResolversTypes['FileUpload']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  isDiscoverable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  object?: Resolver<Maybe<ResolversTypes['Object']>, ParentType, ContextType, RequireFields<StreamObjectArgs, 'id'>>
  pendingAccessRequests?: Resolver<Maybe<Array<ResolversTypes['StreamAccessRequest']>>, ParentType, ContextType>
  pendingCollaborators?: Resolver<Maybe<Array<ResolversTypes['PendingStreamCollaborator']>>, ParentType, ContextType>
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  webhooks?: Resolver<ResolversTypes['WebhookCollection'], ParentType, ContextType, Partial<StreamWebhooksArgs>>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type StreamAccessRequestResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StreamAccessRequest'] = ResolversParentTypes['StreamAccessRequest'],
> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  requester?: Resolver<ResolversTypes['LimitedUser'], ParentType, ContextType>
  requesterId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  stream?: Resolver<ResolversTypes['Stream'], ParentType, ContextType>
  streamId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type StreamCollaboratorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StreamCollaborator'] = ResolversParentTypes['StreamCollaborator'],
> = {
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  serverRole?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type StreamCollectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StreamCollection'] = ResolversParentTypes['StreamCollection'],
> = {
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  items?: Resolver<Maybe<Array<ResolversTypes['Stream']>>, ParentType, ContextType>
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type SubscriptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription'],
> = {
  _?: SubscriptionResolver<Maybe<ResolversTypes['String']>, '_', ParentType, ContextType>
  branchCreated?: SubscriptionResolver<
    Maybe<ResolversTypes['JSONObject']>,
    'branchCreated',
    ParentType,
    ContextType,
    RequireFields<SubscriptionBranchCreatedArgs, 'streamId'>
  >
  branchDeleted?: SubscriptionResolver<
    Maybe<ResolversTypes['JSONObject']>,
    'branchDeleted',
    ParentType,
    ContextType,
    RequireFields<SubscriptionBranchDeletedArgs, 'streamId'>
  >
  branchUpdated?: SubscriptionResolver<
    Maybe<ResolversTypes['JSONObject']>,
    'branchUpdated',
    ParentType,
    ContextType,
    RequireFields<SubscriptionBranchUpdatedArgs, 'streamId'>
  >
  commentActivity?: SubscriptionResolver<
    ResolversTypes['CommentActivityMessage'],
    'commentActivity',
    ParentType,
    ContextType,
    RequireFields<SubscriptionCommentActivityArgs, 'streamId'>
  >
  commentThreadActivity?: SubscriptionResolver<
    ResolversTypes['CommentThreadActivityMessage'],
    'commentThreadActivity',
    ParentType,
    ContextType,
    RequireFields<SubscriptionCommentThreadActivityArgs, 'commentId' | 'streamId'>
  >
  commitCreated?: SubscriptionResolver<
    Maybe<ResolversTypes['JSONObject']>,
    'commitCreated',
    ParentType,
    ContextType,
    RequireFields<SubscriptionCommitCreatedArgs, 'streamId'>
  >
  commitDeleted?: SubscriptionResolver<
    Maybe<ResolversTypes['JSONObject']>,
    'commitDeleted',
    ParentType,
    ContextType,
    RequireFields<SubscriptionCommitDeletedArgs, 'streamId'>
  >
  commitUpdated?: SubscriptionResolver<
    Maybe<ResolversTypes['JSONObject']>,
    'commitUpdated',
    ParentType,
    ContextType,
    RequireFields<SubscriptionCommitUpdatedArgs, 'streamId'>
  >
  projectAutomationsStatusUpdated?: SubscriptionResolver<
    ResolversTypes['ProjectAutomationsStatusUpdatedMessage'],
    'projectAutomationsStatusUpdated',
    ParentType,
    ContextType,
    RequireFields<SubscriptionProjectAutomationsStatusUpdatedArgs, 'projectId'>
  >
  projectCommentsUpdated?: SubscriptionResolver<
    ResolversTypes['ProjectCommentsUpdatedMessage'],
    'projectCommentsUpdated',
    ParentType,
    ContextType,
    RequireFields<SubscriptionProjectCommentsUpdatedArgs, 'target'>
  >
  projectFileImportUpdated?: SubscriptionResolver<
    ResolversTypes['ProjectFileImportUpdatedMessage'],
    'projectFileImportUpdated',
    ParentType,
    ContextType,
    RequireFields<SubscriptionProjectFileImportUpdatedArgs, 'id'>
  >
  projectModelsUpdated?: SubscriptionResolver<
    ResolversTypes['ProjectModelsUpdatedMessage'],
    'projectModelsUpdated',
    ParentType,
    ContextType,
    RequireFields<SubscriptionProjectModelsUpdatedArgs, 'id'>
  >
  projectPendingModelsUpdated?: SubscriptionResolver<
    ResolversTypes['ProjectPendingModelsUpdatedMessage'],
    'projectPendingModelsUpdated',
    ParentType,
    ContextType,
    RequireFields<SubscriptionProjectPendingModelsUpdatedArgs, 'id'>
  >
  projectPendingVersionsUpdated?: SubscriptionResolver<
    ResolversTypes['ProjectPendingVersionsUpdatedMessage'],
    'projectPendingVersionsUpdated',
    ParentType,
    ContextType,
    RequireFields<SubscriptionProjectPendingVersionsUpdatedArgs, 'id'>
  >
  projectUpdated?: SubscriptionResolver<
    ResolversTypes['ProjectUpdatedMessage'],
    'projectUpdated',
    ParentType,
    ContextType,
    RequireFields<SubscriptionProjectUpdatedArgs, 'id'>
  >
  projectVersionsPreviewGenerated?: SubscriptionResolver<
    ResolversTypes['ProjectVersionsPreviewGeneratedMessage'],
    'projectVersionsPreviewGenerated',
    ParentType,
    ContextType,
    RequireFields<SubscriptionProjectVersionsPreviewGeneratedArgs, 'id'>
  >
  projectVersionsUpdated?: SubscriptionResolver<
    ResolversTypes['ProjectVersionsUpdatedMessage'],
    'projectVersionsUpdated',
    ParentType,
    ContextType,
    RequireFields<SubscriptionProjectVersionsUpdatedArgs, 'id'>
  >
  streamDeleted?: SubscriptionResolver<
    Maybe<ResolversTypes['JSONObject']>,
    'streamDeleted',
    ParentType,
    ContextType,
    Partial<SubscriptionStreamDeletedArgs>
  >
  streamUpdated?: SubscriptionResolver<
    Maybe<ResolversTypes['JSONObject']>,
    'streamUpdated',
    ParentType,
    ContextType,
    Partial<SubscriptionStreamUpdatedArgs>
  >
  userProjectsUpdated?: SubscriptionResolver<
    ResolversTypes['UserProjectsUpdatedMessage'],
    'userProjectsUpdated',
    ParentType,
    ContextType
  >
  userStreamAdded?: SubscriptionResolver<
    Maybe<ResolversTypes['JSONObject']>,
    'userStreamAdded',
    ParentType,
    ContextType
  >
  userStreamRemoved?: SubscriptionResolver<
    Maybe<ResolversTypes['JSONObject']>,
    'userStreamRemoved',
    ParentType,
    ContextType
  >
  userViewerActivity?: SubscriptionResolver<
    Maybe<ResolversTypes['JSONObject']>,
    'userViewerActivity',
    ParentType,
    ContextType,
    RequireFields<SubscriptionUserViewerActivityArgs, 'resourceId' | 'streamId'>
  >
  viewerUserActivityBroadcasted?: SubscriptionResolver<
    ResolversTypes['ViewerUserActivityMessage'],
    'viewerUserActivityBroadcasted',
    ParentType,
    ContextType,
    RequireFields<SubscriptionViewerUserActivityBroadcastedArgs, 'target'>
  >
}

export type TestItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TestItem'] = ResolversParentTypes['TestItem'],
> = {
  bar?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  foo?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User'],
> = {
  activity?: Resolver<
    Maybe<ResolversTypes['ActivityCollection']>,
    ParentType,
    ContextType,
    RequireFields<UserActivityArgs, 'limit'>
  >
  apiTokens?: Resolver<Array<ResolversTypes['ApiToken']>, ParentType, ContextType>
  authorizedApps?: Resolver<Maybe<Array<Maybe<ResolversTypes['ServerAppListItem']>>>, ParentType, ContextType>
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  commits?: Resolver<
    Maybe<ResolversTypes['CommitCollection']>,
    ParentType,
    ContextType,
    RequireFields<UserCommitsArgs, 'limit'>
  >
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdApps?: Resolver<Maybe<Array<ResolversTypes['ServerApp']>>, ParentType, ContextType>
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  favoriteStreams?: Resolver<
    ResolversTypes['StreamCollection'],
    ParentType,
    ContextType,
    RequireFields<UserFavoriteStreamsArgs, 'limit'>
  >
  hasPendingVerification?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  isOnboardingFinished?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  notificationPreferences?: Resolver<ResolversTypes['JSONObject'], ParentType, ContextType>
  profiles?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>
  projectInvites?: Resolver<Array<ResolversTypes['PendingStreamCollaborator']>, ParentType, ContextType>
  projects?: Resolver<
    ResolversTypes['ProjectCollection'],
    ParentType,
    ContextType,
    RequireFields<UserProjectsArgs, 'limit'>
  >
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  streams?: Resolver<
    ResolversTypes['StreamCollection'],
    ParentType,
    ContextType,
    RequireFields<UserStreamsArgs, 'limit'>
  >
  timeline?: Resolver<
    Maybe<ResolversTypes['ActivityCollection']>,
    ParentType,
    ContextType,
    RequireFields<UserTimelineArgs, 'limit'>
  >
  totalOwnedStreamsFavorites?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  verified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UserProjectsUpdatedMessageResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['UserProjectsUpdatedMessage'] = ResolversParentTypes['UserProjectsUpdatedMessage'],
> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>
  type?: Resolver<ResolversTypes['UserProjectsUpdatedMessageType'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UserSearchResultCollectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['UserSearchResultCollection'] = ResolversParentTypes['UserSearchResultCollection'],
> = {
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  items?: Resolver<Array<ResolversTypes['LimitedUser']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type VersionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Version'] = ResolversParentTypes['Version'],
> = {
  authorUser?: Resolver<Maybe<ResolversTypes['LimitedUser']>, ParentType, ContextType>
  automationStatus?: Resolver<Maybe<ResolversTypes['AutomationsStatus']>, ParentType, ContextType>
  commentThreads?: Resolver<
    ResolversTypes['CommentCollection'],
    ParentType,
    ContextType,
    RequireFields<VersionCommentThreadsArgs, 'limit'>
  >
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  model?: Resolver<ResolversTypes['Model'], ParentType, ContextType>
  previewUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  referencedObject?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  sourceApplication?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type VersionCollectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['VersionCollection'] = ResolversParentTypes['VersionCollection'],
> = {
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  items?: Resolver<Array<ResolversTypes['Version']>, ParentType, ContextType>
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type VersionMutationsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['VersionMutations'] = ResolversParentTypes['VersionMutations'],
> = {
  delete?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<VersionMutationsDeleteArgs, 'input'>
  >
  moveToModel?: Resolver<
    ResolversTypes['Model'],
    ParentType,
    ContextType,
    RequireFields<VersionMutationsMoveToModelArgs, 'input'>
  >
  update?: Resolver<
    ResolversTypes['Version'],
    ParentType,
    ContextType,
    RequireFields<VersionMutationsUpdateArgs, 'input'>
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ViewerResourceGroupResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ViewerResourceGroup'] = ResolversParentTypes['ViewerResourceGroup'],
> = {
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  items?: Resolver<Array<ResolversTypes['ViewerResourceItem']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ViewerResourceItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ViewerResourceItem'] = ResolversParentTypes['ViewerResourceItem'],
> = {
  modelId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  objectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  versionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ViewerUserActivityMessageResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ViewerUserActivityMessage'] = ResolversParentTypes['ViewerUserActivityMessage'],
> = {
  sessionId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  state?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>
  status?: Resolver<ResolversTypes['ViewerUserActivityStatus'], ParentType, ContextType>
  user?: Resolver<Maybe<ResolversTypes['LimitedUser']>, ParentType, ContextType>
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  userName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type WebhookResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Webhook'] = ResolversParentTypes['Webhook'],
> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  hasSecret?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  history?: Resolver<
    Maybe<ResolversTypes['WebhookEventCollection']>,
    ParentType,
    ContextType,
    RequireFields<WebhookHistoryArgs, 'limit'>
  >
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  projectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  streamId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  triggers?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type WebhookCollectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['WebhookCollection'] = ResolversParentTypes['WebhookCollection'],
> = {
  items?: Resolver<Array<ResolversTypes['Webhook']>, ParentType, ContextType>
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type WebhookEventResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['WebhookEvent'] = ResolversParentTypes['WebhookEvent'],
> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  lastUpdate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  payload?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  retryCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  statusInfo?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  webhookId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type WebhookEventCollectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['WebhookEventCollection'] = ResolversParentTypes['WebhookEventCollection'],
> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['WebhookEvent']>>>, ParentType, ContextType>
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type Resolvers<ContextType = any> = {
  ActiveUserMutations?: ActiveUserMutationsResolvers<ContextType>
  Activity?: ActivityResolvers<ContextType>
  ActivityCollection?: ActivityCollectionResolvers<ContextType>
  AdminInviteList?: AdminInviteListResolvers<ContextType>
  AdminQueries?: AdminQueriesResolvers<ContextType>
  AdminUserList?: AdminUserListResolvers<ContextType>
  AdminUserListItem?: AdminUserListItemResolvers<ContextType>
  AdminUsersListCollection?: AdminUsersListCollectionResolvers<ContextType>
  AdminUsersListItem?: AdminUsersListItemResolvers<ContextType>
  ApiToken?: ApiTokenResolvers<ContextType>
  AppAuthor?: AppAuthorResolvers<ContextType>
  AuthStrategy?: AuthStrategyResolvers<ContextType>
  AutomationFunctionRun?: AutomationFunctionRunResolvers<ContextType>
  AutomationMutations?: AutomationMutationsResolvers<ContextType>
  AutomationRun?: AutomationRunResolvers<ContextType>
  AutomationsStatus?: AutomationsStatusResolvers<ContextType>
  BigInt?: GraphQLScalarType
  BlobMetadata?: BlobMetadataResolvers<ContextType>
  BlobMetadataCollection?: BlobMetadataCollectionResolvers<ContextType>
  Branch?: BranchResolvers<ContextType>
  BranchCollection?: BranchCollectionResolvers<ContextType>
  Comment?: CommentResolvers<ContextType>
  CommentActivityMessage?: CommentActivityMessageResolvers<ContextType>
  CommentCollection?: CommentCollectionResolvers<ContextType>
  CommentDataFilters?: CommentDataFiltersResolvers<ContextType>
  CommentMutations?: CommentMutationsResolvers<ContextType>
  CommentReplyAuthorCollection?: CommentReplyAuthorCollectionResolvers<ContextType>
  CommentThreadActivityMessage?: CommentThreadActivityMessageResolvers<ContextType>
  Commit?: CommitResolvers<ContextType>
  CommitCollection?: CommitCollectionResolvers<ContextType>
  DateTime?: GraphQLScalarType
  EmailAddress?: GraphQLScalarType
  FileUpload?: FileUploadResolvers<ContextType>
  JSONObject?: GraphQLScalarType
  LegacyCommentViewerData?: LegacyCommentViewerDataResolvers<ContextType>
  LimitedUser?: LimitedUserResolvers<ContextType>
  Model?: ModelResolvers<ContextType>
  ModelCollection?: ModelCollectionResolvers<ContextType>
  ModelMutations?: ModelMutationsResolvers<ContextType>
  ModelsTreeItem?: ModelsTreeItemResolvers<ContextType>
  ModelsTreeItemCollection?: ModelsTreeItemCollectionResolvers<ContextType>
  Mutation?: MutationResolvers<ContextType>
  Object?: ObjectResolvers<ContextType>
  ObjectCollection?: ObjectCollectionResolvers<ContextType>
  PasswordStrengthCheckFeedback?: PasswordStrengthCheckFeedbackResolvers<ContextType>
  PasswordStrengthCheckResults?: PasswordStrengthCheckResultsResolvers<ContextType>
  PendingStreamCollaborator?: PendingStreamCollaboratorResolvers<ContextType>
  Project?: ProjectResolvers<ContextType>
  ProjectAutomationsStatusUpdatedMessage?: ProjectAutomationsStatusUpdatedMessageResolvers<ContextType>
  ProjectCollaborator?: ProjectCollaboratorResolvers<ContextType>
  ProjectCollection?: ProjectCollectionResolvers<ContextType>
  ProjectCommentCollection?: ProjectCommentCollectionResolvers<ContextType>
  ProjectCommentsUpdatedMessage?: ProjectCommentsUpdatedMessageResolvers<ContextType>
  ProjectFileImportUpdatedMessage?: ProjectFileImportUpdatedMessageResolvers<ContextType>
  ProjectInviteMutations?: ProjectInviteMutationsResolvers<ContextType>
  ProjectModelsUpdatedMessage?: ProjectModelsUpdatedMessageResolvers<ContextType>
  ProjectMutations?: ProjectMutationsResolvers<ContextType>
  ProjectPendingModelsUpdatedMessage?: ProjectPendingModelsUpdatedMessageResolvers<ContextType>
  ProjectPendingVersionsUpdatedMessage?: ProjectPendingVersionsUpdatedMessageResolvers<ContextType>
  ProjectUpdatedMessage?: ProjectUpdatedMessageResolvers<ContextType>
  ProjectVersionsPreviewGeneratedMessage?: ProjectVersionsPreviewGeneratedMessageResolvers<ContextType>
  ProjectVersionsUpdatedMessage?: ProjectVersionsUpdatedMessageResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  ResourceIdentifier?: ResourceIdentifierResolvers<ContextType>
  Role?: RoleResolvers<ContextType>
  Scope?: ScopeResolvers<ContextType>
  ServerApp?: ServerAppResolvers<ContextType>
  ServerAppListItem?: ServerAppListItemResolvers<ContextType>
  ServerInfo?: ServerInfoResolvers<ContextType>
  ServerInvite?: ServerInviteResolvers<ContextType>
  ServerRoleItem?: ServerRoleItemResolvers<ContextType>
  ServerStatistics?: ServerStatisticsResolvers<ContextType>
  ServerStats?: ServerStatsResolvers<ContextType>
  SmartTextEditorValue?: SmartTextEditorValueResolvers<ContextType>
  Stream?: StreamResolvers<ContextType>
  StreamAccessRequest?: StreamAccessRequestResolvers<ContextType>
  StreamCollaborator?: StreamCollaboratorResolvers<ContextType>
  StreamCollection?: StreamCollectionResolvers<ContextType>
  Subscription?: SubscriptionResolvers<ContextType>
  TestItem?: TestItemResolvers<ContextType>
  User?: UserResolvers<ContextType>
  UserProjectsUpdatedMessage?: UserProjectsUpdatedMessageResolvers<ContextType>
  UserSearchResultCollection?: UserSearchResultCollectionResolvers<ContextType>
  Version?: VersionResolvers<ContextType>
  VersionCollection?: VersionCollectionResolvers<ContextType>
  VersionMutations?: VersionMutationsResolvers<ContextType>
  ViewerResourceGroup?: ViewerResourceGroupResolvers<ContextType>
  ViewerResourceItem?: ViewerResourceItemResolvers<ContextType>
  ViewerUserActivityMessage?: ViewerUserActivityMessageResolvers<ContextType>
  Webhook?: WebhookResolvers<ContextType>
  WebhookCollection?: WebhookCollectionResolvers<ContextType>
  WebhookEvent?: WebhookEventResolvers<ContextType>
  WebhookEventCollection?: WebhookEventCollectionResolvers<ContextType>
}

export type DirectiveResolvers<ContextType = any> = {
  hasScope?: HasScopeDirectiveResolver<any, any, ContextType>
  hasScopes?: HasScopesDirectiveResolver<any, any, ContextType>
  hasServerRole?: HasServerRoleDirectiveResolver<any, any, ContextType>
  hasStreamRole?: HasStreamRoleDirectiveResolver<any, any, ContextType>
  isOwner?: IsOwnerDirectiveResolver<any, any, ContextType>
}

export type GetStreamsQueryVariables = Exact<{ [key: string]: never }>

export type GetStreamsQuery = {
  __typename?: 'Query'
  activeUser?: {
    __typename?: 'User'
    projects: {
      __typename?: 'ProjectCollection'
      items: Array<{
        __typename?: 'Project'
        id: string
        name: string
        description?: string | null
        models: {
          __typename?: 'ModelCollection'
          totalCount: number
          items: Array<{ __typename?: 'Model'; previewUrl?: string | null }>
        }
      }>
    }
  } | null
}

export type GetUserQueryVariables = Exact<{ [key: string]: never }>

export type GetUserQuery = {
  __typename?: 'Query'
  activeUser?: {
    __typename?: 'User'
    id: string
    email?: string | null
    name: string
    bio?: string | null
    avatar?: string | null
  } | null
}

export type GetStreamQueryVariables = Exact<{
  projectId: Scalars['String']['input']
}>

export type GetStreamQuery = {
  __typename?: 'Query'
  stream?: {
    __typename?: 'Stream'
    name: string
    branches?: {
      __typename?: 'BranchCollection'
      totalCount: number
      cursor?: string | null
      items?: Array<{
        __typename?: 'Branch'
        name: string
        commits?: {
          __typename?: 'CommitCollection'
          items?: Array<{ __typename?: 'Commit'; referencedObject: string }> | null
        } | null
      }> | null
    } | null
  } | null
}

export const GetStreamsDocument = gql`
  query getStreams {
    activeUser {
      projects {
        items {
          id
          name
          description
          models {
            items {
              previewUrl
            }
            totalCount
          }
        }
      }
    }
  }
`

/**
 * __useGetStreamsQuery__
 *
 * To run a query within a React component, call `useGetStreamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStreamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStreamsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStreamsQuery(baseOptions?: Apollo.QueryHookOptions<GetStreamsQuery, GetStreamsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetStreamsQuery, GetStreamsQueryVariables>(GetStreamsDocument, options)
}
export function useGetStreamsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetStreamsQuery, GetStreamsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetStreamsQuery, GetStreamsQueryVariables>(GetStreamsDocument, options)
}
export function useGetStreamsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetStreamsQuery, GetStreamsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetStreamsQuery, GetStreamsQueryVariables>(GetStreamsDocument, options)
}
export type GetStreamsQueryHookResult = ReturnType<typeof useGetStreamsQuery>
export type GetStreamsLazyQueryHookResult = ReturnType<typeof useGetStreamsLazyQuery>
export type GetStreamsSuspenseQueryHookResult = ReturnType<typeof useGetStreamsSuspenseQuery>
export type GetStreamsQueryResult = Apollo.QueryResult<GetStreamsQuery, GetStreamsQueryVariables>
export const GetUserDocument = gql`
  query getUser {
    activeUser {
      id
      email
      name
      bio
      avatar
    }
  }
`

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options)
}
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options)
}
export function useGetUserSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options)
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>
export type GetUserSuspenseQueryHookResult = ReturnType<typeof useGetUserSuspenseQuery>
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>
export const GetStreamDocument = gql`
  query getStream($projectId: String!) {
    stream(id: $projectId) {
      name
      branches {
        totalCount
        cursor
        items {
          name
          commits {
            items {
              referencedObject
            }
          }
        }
      }
    }
  }
`

/**
 * __useGetStreamQuery__
 *
 * To run a query within a React component, call `useGetStreamQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStreamQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStreamQuery({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useGetStreamQuery(baseOptions: Apollo.QueryHookOptions<GetStreamQuery, GetStreamQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetStreamQuery, GetStreamQueryVariables>(GetStreamDocument, options)
}
export function useGetStreamLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetStreamQuery, GetStreamQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetStreamQuery, GetStreamQueryVariables>(GetStreamDocument, options)
}
export function useGetStreamSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetStreamQuery, GetStreamQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetStreamQuery, GetStreamQueryVariables>(GetStreamDocument, options)
}
export type GetStreamQueryHookResult = ReturnType<typeof useGetStreamQuery>
export type GetStreamLazyQueryHookResult = ReturnType<typeof useGetStreamLazyQuery>
export type GetStreamSuspenseQueryHookResult = ReturnType<typeof useGetStreamSuspenseQuery>
export type GetStreamQueryResult = Apollo.QueryResult<GetStreamQuery, GetStreamQueryVariables>
