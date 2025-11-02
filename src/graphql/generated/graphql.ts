import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: unknown; output: unknown; }
  DateTime: { input: string; output: string; }
  JSON: { input: Record<string, unknown>; output: Record<string, unknown>; }
};

export type Author = {
  readonly __typename?: 'Author';
  readonly Email: Scalars['String']['output'];
  readonly avatar?: Maybe<UploadFile>;
  readonly bio?: Maybe<Scalars['String']['output']>;
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly posts: ReadonlyArray<Maybe<Post>>;
  readonly posts_connection?: Maybe<PostRelationResponseCollection>;
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly slug: Scalars['String']['output'];
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type AuthorPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type AuthorPosts_ConnectionArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type AuthorEntityResponseCollection = {
  readonly __typename?: 'AuthorEntityResponseCollection';
  readonly nodes: ReadonlyArray<Author>;
  readonly pageInfo: Pagination;
};

export type AuthorFiltersInput = {
  readonly Email?: InputMaybe<StringFilterInput>;
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<AuthorFiltersInput>>>;
  readonly bio?: InputMaybe<StringFilterInput>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly documentId?: InputMaybe<IdFilterInput>;
  readonly name?: InputMaybe<StringFilterInput>;
  readonly not?: InputMaybe<AuthorFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<AuthorFiltersInput>>>;
  readonly posts?: InputMaybe<PostFiltersInput>;
  readonly publishedAt?: InputMaybe<DateTimeFilterInput>;
  readonly slug?: InputMaybe<StringFilterInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AuthorInput = {
  readonly Email?: InputMaybe<Scalars['String']['input']>;
  readonly avatar?: InputMaybe<Scalars['ID']['input']>;
  readonly bio?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly posts?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly slug?: InputMaybe<Scalars['String']['input']>;
};

export type BooleanFilterInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly between?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly contains?: InputMaybe<Scalars['Boolean']['input']>;
  readonly containsi?: InputMaybe<Scalars['Boolean']['input']>;
  readonly endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  readonly eq?: InputMaybe<Scalars['Boolean']['input']>;
  readonly eqi?: InputMaybe<Scalars['Boolean']['input']>;
  readonly gt?: InputMaybe<Scalars['Boolean']['input']>;
  readonly gte?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly lt?: InputMaybe<Scalars['Boolean']['input']>;
  readonly lte?: InputMaybe<Scalars['Boolean']['input']>;
  readonly ne?: InputMaybe<Scalars['Boolean']['input']>;
  readonly nei?: InputMaybe<Scalars['Boolean']['input']>;
  readonly not?: InputMaybe<BooleanFilterInput>;
  readonly notContains?: InputMaybe<Scalars['Boolean']['input']>;
  readonly notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  readonly notIn?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly notNull?: InputMaybe<Scalars['Boolean']['input']>;
  readonly null?: InputMaybe<Scalars['Boolean']['input']>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Category = {
  readonly __typename?: 'Category';
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly posts: ReadonlyArray<Maybe<Post>>;
  readonly posts_connection?: Maybe<PostRelationResponseCollection>;
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly slug: Scalars['String']['output'];
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CategoryPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type CategoryPosts_ConnectionArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type CategoryEntityResponseCollection = {
  readonly __typename?: 'CategoryEntityResponseCollection';
  readonly nodes: ReadonlyArray<Category>;
  readonly pageInfo: Pagination;
};

export type CategoryFiltersInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<CategoryFiltersInput>>>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly description?: InputMaybe<StringFilterInput>;
  readonly documentId?: InputMaybe<IdFilterInput>;
  readonly name?: InputMaybe<StringFilterInput>;
  readonly not?: InputMaybe<CategoryFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<CategoryFiltersInput>>>;
  readonly posts?: InputMaybe<PostFiltersInput>;
  readonly publishedAt?: InputMaybe<DateTimeFilterInput>;
  readonly slug?: InputMaybe<StringFilterInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly posts?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly slug?: InputMaybe<Scalars['String']['input']>;
};

export type Comment = {
  readonly __typename?: 'Comment';
  readonly approved?: Maybe<Scalars['Boolean']['output']>;
  readonly authorEmail: Scalars['String']['output'];
  readonly authorName: Scalars['String']['output'];
  readonly content: Scalars['String']['output'];
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly post?: Maybe<Post>;
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CommentEntityResponseCollection = {
  readonly __typename?: 'CommentEntityResponseCollection';
  readonly nodes: ReadonlyArray<Comment>;
  readonly pageInfo: Pagination;
};

export type CommentFiltersInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<CommentFiltersInput>>>;
  readonly approved?: InputMaybe<BooleanFilterInput>;
  readonly authorEmail?: InputMaybe<StringFilterInput>;
  readonly authorName?: InputMaybe<StringFilterInput>;
  readonly content?: InputMaybe<StringFilterInput>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly documentId?: InputMaybe<IdFilterInput>;
  readonly not?: InputMaybe<CommentFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<CommentFiltersInput>>>;
  readonly post?: InputMaybe<PostFiltersInput>;
  readonly publishedAt?: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CommentInput = {
  readonly approved?: InputMaybe<Scalars['Boolean']['input']>;
  readonly authorEmail?: InputMaybe<Scalars['String']['input']>;
  readonly authorName?: InputMaybe<Scalars['String']['input']>;
  readonly content?: InputMaybe<Scalars['String']['input']>;
  readonly post?: InputMaybe<Scalars['ID']['input']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CommentRelationResponseCollection = {
  readonly __typename?: 'CommentRelationResponseCollection';
  readonly nodes: ReadonlyArray<Comment>;
};

export type DateFilterInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']['input']>>>;
  readonly between?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']['input']>>>;
  readonly contains?: InputMaybe<Scalars['Date']['input']>;
  readonly containsi?: InputMaybe<Scalars['Date']['input']>;
  readonly endsWith?: InputMaybe<Scalars['Date']['input']>;
  readonly eq?: InputMaybe<Scalars['Date']['input']>;
  readonly eqi?: InputMaybe<Scalars['Date']['input']>;
  readonly gt?: InputMaybe<Scalars['Date']['input']>;
  readonly gte?: InputMaybe<Scalars['Date']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']['input']>>>;
  readonly lt?: InputMaybe<Scalars['Date']['input']>;
  readonly lte?: InputMaybe<Scalars['Date']['input']>;
  readonly ne?: InputMaybe<Scalars['Date']['input']>;
  readonly nei?: InputMaybe<Scalars['Date']['input']>;
  readonly not?: InputMaybe<DateFilterInput>;
  readonly notContains?: InputMaybe<Scalars['Date']['input']>;
  readonly notContainsi?: InputMaybe<Scalars['Date']['input']>;
  readonly notIn?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']['input']>>>;
  readonly notNull?: InputMaybe<Scalars['Boolean']['input']>;
  readonly null?: InputMaybe<Scalars['Boolean']['input']>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']['input']>>>;
  readonly startsWith?: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeFilterInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly between?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly contains?: InputMaybe<Scalars['DateTime']['input']>;
  readonly containsi?: InputMaybe<Scalars['DateTime']['input']>;
  readonly endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  readonly eq?: InputMaybe<Scalars['DateTime']['input']>;
  readonly eqi?: InputMaybe<Scalars['DateTime']['input']>;
  readonly gt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly gte?: InputMaybe<Scalars['DateTime']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly lt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly lte?: InputMaybe<Scalars['DateTime']['input']>;
  readonly ne?: InputMaybe<Scalars['DateTime']['input']>;
  readonly nei?: InputMaybe<Scalars['DateTime']['input']>;
  readonly not?: InputMaybe<DateTimeFilterInput>;
  readonly notContains?: InputMaybe<Scalars['DateTime']['input']>;
  readonly notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  readonly notIn?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly notNull?: InputMaybe<Scalars['Boolean']['input']>;
  readonly null?: InputMaybe<Scalars['Boolean']['input']>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DeleteMutationResponse = {
  readonly __typename?: 'DeleteMutationResponse';
  readonly documentId: Scalars['ID']['output'];
};

export type FileInfoInput = {
  readonly alternativeText?: InputMaybe<Scalars['String']['input']>;
  readonly caption?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly between?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly contains?: InputMaybe<Scalars['Float']['input']>;
  readonly containsi?: InputMaybe<Scalars['Float']['input']>;
  readonly endsWith?: InputMaybe<Scalars['Float']['input']>;
  readonly eq?: InputMaybe<Scalars['Float']['input']>;
  readonly eqi?: InputMaybe<Scalars['Float']['input']>;
  readonly gt?: InputMaybe<Scalars['Float']['input']>;
  readonly gte?: InputMaybe<Scalars['Float']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly lt?: InputMaybe<Scalars['Float']['input']>;
  readonly lte?: InputMaybe<Scalars['Float']['input']>;
  readonly ne?: InputMaybe<Scalars['Float']['input']>;
  readonly nei?: InputMaybe<Scalars['Float']['input']>;
  readonly not?: InputMaybe<FloatFilterInput>;
  readonly notContains?: InputMaybe<Scalars['Float']['input']>;
  readonly notContainsi?: InputMaybe<Scalars['Float']['input']>;
  readonly notIn?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly notNull?: InputMaybe<Scalars['Boolean']['input']>;
  readonly null?: InputMaybe<Scalars['Boolean']['input']>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = Author | Category | Comment | I18NLocale | Newsletter | Post | ReviewWorkflowsWorkflow | ReviewWorkflowsWorkflowStage | Tag | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  readonly __typename?: 'I18NLocale';
  readonly code?: Maybe<Scalars['String']['output']>;
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntityResponseCollection = {
  readonly __typename?: 'I18NLocaleEntityResponseCollection';
  readonly nodes: ReadonlyArray<I18NLocale>;
  readonly pageInfo: Pagination;
};

export type I18NLocaleFiltersInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<I18NLocaleFiltersInput>>>;
  readonly code?: InputMaybe<StringFilterInput>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly documentId?: InputMaybe<IdFilterInput>;
  readonly name?: InputMaybe<StringFilterInput>;
  readonly not?: InputMaybe<I18NLocaleFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<I18NLocaleFiltersInput>>>;
  readonly publishedAt?: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly between?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly contains?: InputMaybe<Scalars['ID']['input']>;
  readonly containsi?: InputMaybe<Scalars['ID']['input']>;
  readonly endsWith?: InputMaybe<Scalars['ID']['input']>;
  readonly eq?: InputMaybe<Scalars['ID']['input']>;
  readonly eqi?: InputMaybe<Scalars['ID']['input']>;
  readonly gt?: InputMaybe<Scalars['ID']['input']>;
  readonly gte?: InputMaybe<Scalars['ID']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly lt?: InputMaybe<Scalars['ID']['input']>;
  readonly lte?: InputMaybe<Scalars['ID']['input']>;
  readonly ne?: InputMaybe<Scalars['ID']['input']>;
  readonly nei?: InputMaybe<Scalars['ID']['input']>;
  readonly not?: InputMaybe<IdFilterInput>;
  readonly notContains?: InputMaybe<Scalars['ID']['input']>;
  readonly notContainsi?: InputMaybe<Scalars['ID']['input']>;
  readonly notIn?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly notNull?: InputMaybe<Scalars['Boolean']['input']>;
  readonly null?: InputMaybe<Scalars['Boolean']['input']>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly between?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly contains?: InputMaybe<Scalars['Int']['input']>;
  readonly containsi?: InputMaybe<Scalars['Int']['input']>;
  readonly endsWith?: InputMaybe<Scalars['Int']['input']>;
  readonly eq?: InputMaybe<Scalars['Int']['input']>;
  readonly eqi?: InputMaybe<Scalars['Int']['input']>;
  readonly gt?: InputMaybe<Scalars['Int']['input']>;
  readonly gte?: InputMaybe<Scalars['Int']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly lt?: InputMaybe<Scalars['Int']['input']>;
  readonly lte?: InputMaybe<Scalars['Int']['input']>;
  readonly ne?: InputMaybe<Scalars['Int']['input']>;
  readonly nei?: InputMaybe<Scalars['Int']['input']>;
  readonly not?: InputMaybe<IntFilterInput>;
  readonly notContains?: InputMaybe<Scalars['Int']['input']>;
  readonly notContainsi?: InputMaybe<Scalars['Int']['input']>;
  readonly notIn?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly notNull?: InputMaybe<Scalars['Boolean']['input']>;
  readonly null?: InputMaybe<Scalars['Boolean']['input']>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly between?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly contains?: InputMaybe<Scalars['JSON']['input']>;
  readonly containsi?: InputMaybe<Scalars['JSON']['input']>;
  readonly endsWith?: InputMaybe<Scalars['JSON']['input']>;
  readonly eq?: InputMaybe<Scalars['JSON']['input']>;
  readonly eqi?: InputMaybe<Scalars['JSON']['input']>;
  readonly gt?: InputMaybe<Scalars['JSON']['input']>;
  readonly gte?: InputMaybe<Scalars['JSON']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly lt?: InputMaybe<Scalars['JSON']['input']>;
  readonly lte?: InputMaybe<Scalars['JSON']['input']>;
  readonly ne?: InputMaybe<Scalars['JSON']['input']>;
  readonly nei?: InputMaybe<Scalars['JSON']['input']>;
  readonly not?: InputMaybe<JsonFilterInput>;
  readonly notContains?: InputMaybe<Scalars['JSON']['input']>;
  readonly notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  readonly notIn?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly notNull?: InputMaybe<Scalars['Boolean']['input']>;
  readonly null?: InputMaybe<Scalars['Boolean']['input']>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  readonly changePassword?: Maybe<UsersPermissionsLoginPayload>;
  readonly createAuthor?: Maybe<Author>;
  readonly createCategory?: Maybe<Category>;
  readonly createComment?: Maybe<Comment>;
  readonly createNewsletter?: Maybe<Newsletter>;
  readonly createPost?: Maybe<Post>;
  readonly createReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  readonly createReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  readonly createTag?: Maybe<Tag>;
  /** Create a new role */
  readonly createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  readonly createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  readonly deleteAuthor?: Maybe<DeleteMutationResponse>;
  readonly deleteCategory?: Maybe<DeleteMutationResponse>;
  readonly deleteComment?: Maybe<DeleteMutationResponse>;
  readonly deleteNewsletter?: Maybe<DeleteMutationResponse>;
  readonly deletePost?: Maybe<DeleteMutationResponse>;
  readonly deleteReviewWorkflowsWorkflow?: Maybe<DeleteMutationResponse>;
  readonly deleteReviewWorkflowsWorkflowStage?: Maybe<DeleteMutationResponse>;
  readonly deleteTag?: Maybe<DeleteMutationResponse>;
  readonly deleteUploadFile?: Maybe<UploadFile>;
  /** Delete an existing role */
  readonly deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  readonly deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  readonly emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  readonly forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  readonly login: UsersPermissionsLoginPayload;
  /** Register a user */
  readonly register: UsersPermissionsLoginPayload;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  readonly resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  readonly updateAuthor?: Maybe<Author>;
  readonly updateCategory?: Maybe<Category>;
  readonly updateComment?: Maybe<Comment>;
  readonly updateNewsletter?: Maybe<Newsletter>;
  readonly updatePost?: Maybe<Post>;
  readonly updateReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  readonly updateReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  readonly updateTag?: Maybe<Tag>;
  readonly updateUploadFile: UploadFile;
  /** Update an existing role */
  readonly updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  readonly updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateAuthorArgs = {
  data: AuthorInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateCommentArgs = {
  data: CommentInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateNewsletterArgs = {
  data: NewsletterInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreatePostArgs = {
  data: PostInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateTagArgs = {
  data: TagInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteAuthorArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteCategoryArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteCommentArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteNewsletterArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeletePostArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteTagArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateAuthorArgs = {
  data: AuthorInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateCommentArgs = {
  data: CommentInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateNewsletterArgs = {
  data: NewsletterInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdatePostArgs = {
  data: PostInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateTagArgs = {
  data: TagInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateUploadFileArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};

export type Newsletter = {
  readonly __typename?: 'Newsletter';
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly email: Scalars['String']['output'];
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type NewsletterEntityResponseCollection = {
  readonly __typename?: 'NewsletterEntityResponseCollection';
  readonly nodes: ReadonlyArray<Newsletter>;
  readonly pageInfo: Pagination;
};

export type NewsletterFiltersInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<NewsletterFiltersInput>>>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly documentId?: InputMaybe<IdFilterInput>;
  readonly email?: InputMaybe<StringFilterInput>;
  readonly not?: InputMaybe<NewsletterFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<NewsletterFiltersInput>>>;
  readonly publishedAt?: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type NewsletterInput = {
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Pagination = {
  readonly __typename?: 'Pagination';
  readonly page: Scalars['Int']['output'];
  readonly pageCount: Scalars['Int']['output'];
  readonly pageSize: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export type PaginationArg = {
  readonly limit?: InputMaybe<Scalars['Int']['input']>;
  readonly page?: InputMaybe<Scalars['Int']['input']>;
  readonly pageSize?: InputMaybe<Scalars['Int']['input']>;
  readonly start?: InputMaybe<Scalars['Int']['input']>;
};

export type Post = {
  readonly __typename?: 'Post';
  readonly author?: Maybe<Author>;
  readonly category?: Maybe<Category>;
  readonly comments: ReadonlyArray<Maybe<Comment>>;
  readonly comments_connection?: Maybe<CommentRelationResponseCollection>;
  readonly content: Scalars['String']['output'];
  readonly coverImage?: Maybe<UploadFile>;
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly published_date?: Maybe<Scalars['Date']['output']>;
  readonly slug: Scalars['String']['output'];
  readonly tags: ReadonlyArray<Maybe<Tag>>;
  readonly tags_connection?: Maybe<TagRelationResponseCollection>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PostCommentsArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type PostComments_ConnectionArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type PostTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type PostTags_ConnectionArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type PostEntityResponseCollection = {
  readonly __typename?: 'PostEntityResponseCollection';
  readonly nodes: ReadonlyArray<Post>;
  readonly pageInfo: Pagination;
};

export type PostFiltersInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<PostFiltersInput>>>;
  readonly author?: InputMaybe<AuthorFiltersInput>;
  readonly category?: InputMaybe<CategoryFiltersInput>;
  readonly comments?: InputMaybe<CommentFiltersInput>;
  readonly content?: InputMaybe<StringFilterInput>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly documentId?: InputMaybe<IdFilterInput>;
  readonly not?: InputMaybe<PostFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<PostFiltersInput>>>;
  readonly publishedAt?: InputMaybe<DateTimeFilterInput>;
  readonly published_date?: InputMaybe<DateFilterInput>;
  readonly slug?: InputMaybe<StringFilterInput>;
  readonly tags?: InputMaybe<TagFiltersInput>;
  readonly title?: InputMaybe<StringFilterInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PostInput = {
  readonly author?: InputMaybe<Scalars['ID']['input']>;
  readonly category?: InputMaybe<Scalars['ID']['input']>;
  readonly comments?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly content?: InputMaybe<Scalars['String']['input']>;
  readonly coverImage?: InputMaybe<Scalars['ID']['input']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly published_date?: InputMaybe<Scalars['Date']['input']>;
  readonly slug?: InputMaybe<Scalars['String']['input']>;
  readonly tags?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly title?: InputMaybe<Scalars['String']['input']>;
};

export type PostRelationResponseCollection = {
  readonly __typename?: 'PostRelationResponseCollection';
  readonly nodes: ReadonlyArray<Post>;
};

export type PublicationStatus =
  | 'DRAFT'
  | 'PUBLISHED';

export type Query = {
  readonly __typename?: 'Query';
  readonly author?: Maybe<Author>;
  readonly authors: ReadonlyArray<Maybe<Author>>;
  readonly authors_connection?: Maybe<AuthorEntityResponseCollection>;
  readonly categories: ReadonlyArray<Maybe<Category>>;
  readonly categories_connection?: Maybe<CategoryEntityResponseCollection>;
  readonly category?: Maybe<Category>;
  readonly comment?: Maybe<Comment>;
  readonly comments: ReadonlyArray<Maybe<Comment>>;
  readonly comments_connection?: Maybe<CommentEntityResponseCollection>;
  readonly i18NLocale?: Maybe<I18NLocale>;
  readonly i18NLocales: ReadonlyArray<Maybe<I18NLocale>>;
  readonly i18NLocales_connection?: Maybe<I18NLocaleEntityResponseCollection>;
  readonly me?: Maybe<UsersPermissionsMe>;
  readonly newsletter?: Maybe<Newsletter>;
  readonly newsletters: ReadonlyArray<Maybe<Newsletter>>;
  readonly newsletters_connection?: Maybe<NewsletterEntityResponseCollection>;
  readonly post?: Maybe<Post>;
  readonly posts: ReadonlyArray<Maybe<Post>>;
  readonly posts_connection?: Maybe<PostEntityResponseCollection>;
  readonly reviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  readonly reviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  readonly reviewWorkflowsWorkflowStages: ReadonlyArray<Maybe<ReviewWorkflowsWorkflowStage>>;
  readonly reviewWorkflowsWorkflowStages_connection?: Maybe<ReviewWorkflowsWorkflowStageEntityResponseCollection>;
  readonly reviewWorkflowsWorkflows: ReadonlyArray<Maybe<ReviewWorkflowsWorkflow>>;
  readonly reviewWorkflowsWorkflows_connection?: Maybe<ReviewWorkflowsWorkflowEntityResponseCollection>;
  readonly tag?: Maybe<Tag>;
  readonly tags: ReadonlyArray<Maybe<Tag>>;
  readonly tags_connection?: Maybe<TagEntityResponseCollection>;
  readonly uploadFile?: Maybe<UploadFile>;
  readonly uploadFiles: ReadonlyArray<Maybe<UploadFile>>;
  readonly uploadFiles_connection?: Maybe<UploadFileEntityResponseCollection>;
  readonly usersPermissionsRole?: Maybe<UsersPermissionsRole>;
  readonly usersPermissionsRoles: ReadonlyArray<Maybe<UsersPermissionsRole>>;
  readonly usersPermissionsRoles_connection?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  readonly usersPermissionsUser?: Maybe<UsersPermissionsUser>;
  readonly usersPermissionsUsers: ReadonlyArray<Maybe<UsersPermissionsUser>>;
  readonly usersPermissionsUsers_connection?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryAuthorArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryAuthorsArgs = {
  filters?: InputMaybe<AuthorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryAuthors_ConnectionArgs = {
  filters?: InputMaybe<AuthorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCategories_ConnectionArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCategoryArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCommentArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCommentsArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryComments_ConnectionArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocaleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocales_ConnectionArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryNewsletterArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryNewslettersArgs = {
  filters?: InputMaybe<NewsletterFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryNewsletters_ConnectionArgs = {
  filters?: InputMaybe<NewsletterFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPostArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPosts_ConnectionArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowsArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflows_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTagArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTags_ConnectionArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFileArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFiles_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRoleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRoles_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUserArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type ReviewWorkflowsWorkflow = {
  readonly __typename?: 'ReviewWorkflowsWorkflow';
  readonly contentTypes: Scalars['JSON']['output'];
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly stageRequiredToPublish?: Maybe<ReviewWorkflowsWorkflowStage>;
  readonly stages: ReadonlyArray<Maybe<ReviewWorkflowsWorkflowStage>>;
  readonly stages_connection?: Maybe<ReviewWorkflowsWorkflowStageRelationResponseCollection>;
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type ReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ReviewWorkflowsWorkflowEntityResponseCollection = {
  readonly __typename?: 'ReviewWorkflowsWorkflowEntityResponseCollection';
  readonly nodes: ReadonlyArray<ReviewWorkflowsWorkflow>;
  readonly pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowFiltersInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  readonly contentTypes?: InputMaybe<JsonFilterInput>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly documentId?: InputMaybe<IdFilterInput>;
  readonly name?: InputMaybe<StringFilterInput>;
  readonly not?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  readonly publishedAt?: InputMaybe<DateTimeFilterInput>;
  readonly stageRequiredToPublish?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  readonly stages?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ReviewWorkflowsWorkflowInput = {
  readonly contentTypes?: InputMaybe<Scalars['JSON']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly stageRequiredToPublish?: InputMaybe<Scalars['ID']['input']>;
  readonly stages?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type ReviewWorkflowsWorkflowStage = {
  readonly __typename?: 'ReviewWorkflowsWorkflowStage';
  readonly color?: Maybe<Scalars['String']['output']>;
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly workflow?: Maybe<ReviewWorkflowsWorkflow>;
};

export type ReviewWorkflowsWorkflowStageEntityResponseCollection = {
  readonly __typename?: 'ReviewWorkflowsWorkflowStageEntityResponseCollection';
  readonly nodes: ReadonlyArray<ReviewWorkflowsWorkflowStage>;
  readonly pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowStageFiltersInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  readonly color?: InputMaybe<StringFilterInput>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly documentId?: InputMaybe<IdFilterInput>;
  readonly name?: InputMaybe<StringFilterInput>;
  readonly not?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  readonly publishedAt?: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
  readonly workflow?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
};

export type ReviewWorkflowsWorkflowStageInput = {
  readonly color?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly workflow?: InputMaybe<Scalars['ID']['input']>;
};

export type ReviewWorkflowsWorkflowStageRelationResponseCollection = {
  readonly __typename?: 'ReviewWorkflowsWorkflowStageRelationResponseCollection';
  readonly nodes: ReadonlyArray<ReviewWorkflowsWorkflowStage>;
};

export type StringFilterInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly between?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly containsi?: InputMaybe<Scalars['String']['input']>;
  readonly endsWith?: InputMaybe<Scalars['String']['input']>;
  readonly eq?: InputMaybe<Scalars['String']['input']>;
  readonly eqi?: InputMaybe<Scalars['String']['input']>;
  readonly gt?: InputMaybe<Scalars['String']['input']>;
  readonly gte?: InputMaybe<Scalars['String']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly lt?: InputMaybe<Scalars['String']['input']>;
  readonly lte?: InputMaybe<Scalars['String']['input']>;
  readonly ne?: InputMaybe<Scalars['String']['input']>;
  readonly nei?: InputMaybe<Scalars['String']['input']>;
  readonly not?: InputMaybe<StringFilterInput>;
  readonly notContains?: InputMaybe<Scalars['String']['input']>;
  readonly notContainsi?: InputMaybe<Scalars['String']['input']>;
  readonly notIn?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly notNull?: InputMaybe<Scalars['Boolean']['input']>;
  readonly null?: InputMaybe<Scalars['Boolean']['input']>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Tag = {
  readonly __typename?: 'Tag';
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly posts: ReadonlyArray<Maybe<Post>>;
  readonly posts_connection?: Maybe<PostRelationResponseCollection>;
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly slug: Scalars['String']['output'];
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type TagPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type TagPosts_ConnectionArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type TagEntityResponseCollection = {
  readonly __typename?: 'TagEntityResponseCollection';
  readonly nodes: ReadonlyArray<Tag>;
  readonly pageInfo: Pagination;
};

export type TagFiltersInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<TagFiltersInput>>>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly documentId?: InputMaybe<IdFilterInput>;
  readonly name?: InputMaybe<StringFilterInput>;
  readonly not?: InputMaybe<TagFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<TagFiltersInput>>>;
  readonly posts?: InputMaybe<PostFiltersInput>;
  readonly publishedAt?: InputMaybe<DateTimeFilterInput>;
  readonly slug?: InputMaybe<StringFilterInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TagInput = {
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly posts?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly slug?: InputMaybe<Scalars['String']['input']>;
};

export type TagRelationResponseCollection = {
  readonly __typename?: 'TagRelationResponseCollection';
  readonly nodes: ReadonlyArray<Tag>;
};

export type UploadFile = {
  readonly __typename?: 'UploadFile';
  readonly alternativeText?: Maybe<Scalars['String']['output']>;
  readonly caption?: Maybe<Scalars['String']['output']>;
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly ext?: Maybe<Scalars['String']['output']>;
  readonly formats?: Maybe<Scalars['JSON']['output']>;
  readonly hash: Scalars['String']['output'];
  readonly height?: Maybe<Scalars['Int']['output']>;
  readonly mime: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly previewUrl?: Maybe<Scalars['String']['output']>;
  readonly provider: Scalars['String']['output'];
  readonly provider_metadata?: Maybe<Scalars['JSON']['output']>;
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly related?: Maybe<ReadonlyArray<Maybe<GenericMorph>>>;
  readonly size: Scalars['Float']['output'];
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly url: Scalars['String']['output'];
  readonly width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntityResponseCollection = {
  readonly __typename?: 'UploadFileEntityResponseCollection';
  readonly nodes: ReadonlyArray<UploadFile>;
  readonly pageInfo: Pagination;
};

export type UploadFileFiltersInput = {
  readonly alternativeText?: InputMaybe<StringFilterInput>;
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<UploadFileFiltersInput>>>;
  readonly caption?: InputMaybe<StringFilterInput>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly documentId?: InputMaybe<IdFilterInput>;
  readonly ext?: InputMaybe<StringFilterInput>;
  readonly formats?: InputMaybe<JsonFilterInput>;
  readonly hash?: InputMaybe<StringFilterInput>;
  readonly height?: InputMaybe<IntFilterInput>;
  readonly mime?: InputMaybe<StringFilterInput>;
  readonly name?: InputMaybe<StringFilterInput>;
  readonly not?: InputMaybe<UploadFileFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<UploadFileFiltersInput>>>;
  readonly previewUrl?: InputMaybe<StringFilterInput>;
  readonly provider?: InputMaybe<StringFilterInput>;
  readonly provider_metadata?: InputMaybe<JsonFilterInput>;
  readonly publishedAt?: InputMaybe<DateTimeFilterInput>;
  readonly size?: InputMaybe<FloatFilterInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
  readonly url?: InputMaybe<StringFilterInput>;
  readonly width?: InputMaybe<IntFilterInput>;
};

export type UsersPermissionsCreateRolePayload = {
  readonly __typename?: 'UsersPermissionsCreateRolePayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  readonly __typename?: 'UsersPermissionsDeleteRolePayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  readonly identifier: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  readonly __typename?: 'UsersPermissionsLoginPayload';
  readonly jwt?: Maybe<Scalars['String']['output']>;
  readonly user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  readonly __typename?: 'UsersPermissionsMe';
  readonly blocked?: Maybe<Scalars['Boolean']['output']>;
  readonly confirmed?: Maybe<Scalars['Boolean']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly email?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly role?: Maybe<UsersPermissionsMeRole>;
  readonly username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  readonly __typename?: 'UsersPermissionsMeRole';
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  readonly __typename?: 'UsersPermissionsPasswordPayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  readonly __typename?: 'UsersPermissionsPermission';
  readonly action: Scalars['String']['output'];
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly role?: Maybe<UsersPermissionsRole>;
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  readonly action?: InputMaybe<StringFilterInput>;
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly documentId?: InputMaybe<IdFilterInput>;
  readonly not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  readonly publishedAt?: InputMaybe<DateTimeFilterInput>;
  readonly role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  readonly __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  readonly nodes: ReadonlyArray<UsersPermissionsPermission>;
};

export type UsersPermissionsRegisterInput = {
  readonly email: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  readonly __typename?: 'UsersPermissionsRole';
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly permissions: ReadonlyArray<Maybe<UsersPermissionsPermission>>;
  readonly permissions_connection?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly type?: Maybe<Scalars['String']['output']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly users: ReadonlyArray<Maybe<UsersPermissionsUser>>;
  readonly users_connection?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRolePermissions_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  readonly __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  readonly nodes: ReadonlyArray<UsersPermissionsRole>;
  readonly pageInfo: Pagination;
};

export type UsersPermissionsRoleFiltersInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly description?: InputMaybe<StringFilterInput>;
  readonly documentId?: InputMaybe<IdFilterInput>;
  readonly name?: InputMaybe<StringFilterInput>;
  readonly not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  readonly permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  readonly publishedAt?: InputMaybe<DateTimeFilterInput>;
  readonly type?: InputMaybe<StringFilterInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
  readonly users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly permissions?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly type?: InputMaybe<Scalars['String']['input']>;
  readonly users?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  readonly __typename?: 'UsersPermissionsUpdateRolePayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  readonly __typename?: 'UsersPermissionsUser';
  readonly blocked?: Maybe<Scalars['Boolean']['output']>;
  readonly confirmed?: Maybe<Scalars['Boolean']['output']>;
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly email: Scalars['String']['output'];
  readonly provider?: Maybe<Scalars['String']['output']>;
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly role?: Maybe<UsersPermissionsRole>;
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntityResponse = {
  readonly __typename?: 'UsersPermissionsUserEntityResponse';
  readonly data?: Maybe<UsersPermissionsUser>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  readonly __typename?: 'UsersPermissionsUserEntityResponseCollection';
  readonly nodes: ReadonlyArray<UsersPermissionsUser>;
  readonly pageInfo: Pagination;
};

export type UsersPermissionsUserFiltersInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  readonly blocked?: InputMaybe<BooleanFilterInput>;
  readonly confirmed?: InputMaybe<BooleanFilterInput>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly documentId?: InputMaybe<IdFilterInput>;
  readonly email?: InputMaybe<StringFilterInput>;
  readonly not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  readonly provider?: InputMaybe<StringFilterInput>;
  readonly publishedAt?: InputMaybe<DateTimeFilterInput>;
  readonly role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
  readonly username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  readonly blocked?: InputMaybe<Scalars['Boolean']['input']>;
  readonly confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly password?: InputMaybe<Scalars['String']['input']>;
  readonly provider?: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly role?: InputMaybe<Scalars['ID']['input']>;
  readonly username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  readonly __typename?: 'UsersPermissionsUserRelationResponseCollection';
  readonly nodes: ReadonlyArray<UsersPermissionsUser>;
};

export type CreateCommentMutationVariables = Exact<{
  data: CommentInput;
}>;


export type CreateCommentMutation = { readonly __typename?: 'Mutation', readonly createComment?: { readonly __typename?: 'Comment', readonly documentId: string, readonly content: string, readonly authorName: string, readonly authorEmail: string, readonly approved?: boolean | null } | null };

export type CreateNewsletterSubscriptionMutationVariables = Exact<{
  data: NewsletterInput;
}>;


export type CreateNewsletterSubscriptionMutation = { readonly __typename?: 'Mutation', readonly createNewsletter?: { readonly __typename?: 'Newsletter', readonly documentId: string, readonly email: string } | null };

export type GetAuthorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAuthorsQuery = { readonly __typename?: 'Query', readonly authors: ReadonlyArray<{ readonly __typename?: 'Author', readonly documentId: string, readonly name: string, readonly slug: string, readonly bio?: string | null } | null> };

export type GetAuthorBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetAuthorBySlugQuery = { readonly __typename?: 'Query', readonly authors: ReadonlyArray<{ readonly __typename?: 'Author', readonly documentId: string, readonly name: string, readonly slug: string, readonly Email: string, readonly bio?: string | null } | null> };

export type GetCategoriesQueryVariables = Exact<{
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetCategoriesQuery = { readonly __typename?: 'Query', readonly categories: ReadonlyArray<{ readonly __typename?: 'Category', readonly documentId: string, readonly name: string, readonly slug: string, readonly description?: string | null } | null> };

export type GetCategoryBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetCategoryBySlugQuery = { readonly __typename?: 'Query', readonly categories: ReadonlyArray<{ readonly __typename?: 'Category', readonly documentId: string, readonly name: string, readonly slug: string, readonly description?: string | null } | null> };

export type GetPostsQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationArg>;
  filters?: InputMaybe<PostFiltersInput>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetPostsQuery = { readonly __typename?: 'Query', readonly posts: ReadonlyArray<{ readonly __typename?: 'Post', readonly documentId: string, readonly title: string, readonly slug: string, readonly content: string, readonly published_date?: unknown | null, readonly coverImage?: { readonly __typename?: 'UploadFile', readonly documentId: string, readonly url: string, readonly alternativeText?: string | null, readonly width?: number | null, readonly height?: number | null } | null, readonly author?: { readonly __typename?: 'Author', readonly documentId: string, readonly name: string, readonly slug: string, readonly avatar?: { readonly __typename?: 'UploadFile', readonly documentId: string, readonly url: string } | null } | null, readonly category?: { readonly __typename?: 'Category', readonly documentId: string, readonly name: string, readonly slug: string } | null, readonly tags: ReadonlyArray<{ readonly __typename?: 'Tag', readonly documentId: string, readonly name: string, readonly slug: string } | null> } | null> };

export type GetPostBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetPostBySlugQuery = { readonly __typename?: 'Query', readonly posts: ReadonlyArray<{ readonly __typename?: 'Post', readonly documentId: string, readonly title: string, readonly slug: string, readonly content: string, readonly published_date?: unknown | null, readonly coverImage?: { readonly __typename?: 'UploadFile', readonly documentId: string, readonly url: string, readonly alternativeText?: string | null, readonly width?: number | null, readonly height?: number | null } | null, readonly author?: { readonly __typename?: 'Author', readonly documentId: string, readonly name: string, readonly slug: string, readonly Email: string, readonly bio?: string | null, readonly avatar?: { readonly __typename?: 'UploadFile', readonly documentId: string, readonly url: string } | null } | null, readonly category?: { readonly __typename?: 'Category', readonly documentId: string, readonly name: string, readonly slug: string, readonly description?: string | null } | null, readonly tags: ReadonlyArray<{ readonly __typename?: 'Tag', readonly documentId: string, readonly name: string, readonly slug: string } | null>, readonly comments: ReadonlyArray<{ readonly __typename?: 'Comment', readonly documentId: string, readonly content: string, readonly authorName: string, readonly approved?: boolean | null, readonly createdAt?: string | null } | null> } | null> };

export type GetPostSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostSlugsQuery = { readonly __typename?: 'Query', readonly posts: ReadonlyArray<{ readonly __typename?: 'Post', readonly documentId: string, readonly slug: string } | null> };

export type GetTagsQueryVariables = Exact<{
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetTagsQuery = { readonly __typename?: 'Query', readonly tags: ReadonlyArray<{ readonly __typename?: 'Tag', readonly documentId: string, readonly name: string, readonly slug: string } | null> };

export type GetTagBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetTagBySlugQuery = { readonly __typename?: 'Query', readonly tags: ReadonlyArray<{ readonly __typename?: 'Tag', readonly documentId: string, readonly name: string, readonly slug: string } | null> };


export const CreateCommentDocument = gql`
    mutation CreateComment($data: CommentInput!) {
  createComment(data: $data) {
    documentId
    content
    authorName
    authorEmail
    approved
  }
}
    `;
export type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, options);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const CreateNewsletterSubscriptionDocument = gql`
    mutation CreateNewsletterSubscription($data: NewsletterInput!) {
  createNewsletter(data: $data) {
    documentId
    email
  }
}
    `;
export type CreateNewsletterSubscriptionMutationFn = Apollo.MutationFunction<CreateNewsletterSubscriptionMutation, CreateNewsletterSubscriptionMutationVariables>;

/**
 * __useCreateNewsletterSubscriptionMutation__
 *
 * To run a mutation, you first call `useCreateNewsletterSubscriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewsletterSubscriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewsletterSubscriptionMutation, { data, loading, error }] = useCreateNewsletterSubscriptionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateNewsletterSubscriptionMutation(baseOptions?: Apollo.MutationHookOptions<CreateNewsletterSubscriptionMutation, CreateNewsletterSubscriptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNewsletterSubscriptionMutation, CreateNewsletterSubscriptionMutationVariables>(CreateNewsletterSubscriptionDocument, options);
      }
export type CreateNewsletterSubscriptionMutationHookResult = ReturnType<typeof useCreateNewsletterSubscriptionMutation>;
export type CreateNewsletterSubscriptionMutationResult = Apollo.MutationResult<CreateNewsletterSubscriptionMutation>;
export type CreateNewsletterSubscriptionMutationOptions = Apollo.BaseMutationOptions<CreateNewsletterSubscriptionMutation, CreateNewsletterSubscriptionMutationVariables>;
export const GetAuthorsDocument = gql`
    query GetAuthors {
  authors {
    documentId
    name
    slug
    bio
  }
}
    `;

/**
 * __useGetAuthorsQuery__
 *
 * To run a query within a React component, call `useGetAuthorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuthorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuthorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAuthorsQuery(baseOptions?: Apollo.QueryHookOptions<GetAuthorsQuery, GetAuthorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAuthorsQuery, GetAuthorsQueryVariables>(GetAuthorsDocument, options);
      }
export function useGetAuthorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAuthorsQuery, GetAuthorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAuthorsQuery, GetAuthorsQueryVariables>(GetAuthorsDocument, options);
        }
export function useGetAuthorsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAuthorsQuery, GetAuthorsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAuthorsQuery, GetAuthorsQueryVariables>(GetAuthorsDocument, options);
        }
export type GetAuthorsQueryHookResult = ReturnType<typeof useGetAuthorsQuery>;
export type GetAuthorsLazyQueryHookResult = ReturnType<typeof useGetAuthorsLazyQuery>;
export type GetAuthorsSuspenseQueryHookResult = ReturnType<typeof useGetAuthorsSuspenseQuery>;
export type GetAuthorsQueryResult = Apollo.QueryResult<GetAuthorsQuery, GetAuthorsQueryVariables>;
export const GetAuthorBySlugDocument = gql`
    query GetAuthorBySlug($slug: String!) {
  authors(filters: {slug: {eq: $slug}}) {
    documentId
    name
    slug
    Email
    bio
  }
}
    `;

/**
 * __useGetAuthorBySlugQuery__
 *
 * To run a query within a React component, call `useGetAuthorBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuthorBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuthorBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetAuthorBySlugQuery(baseOptions: Apollo.QueryHookOptions<GetAuthorBySlugQuery, GetAuthorBySlugQueryVariables> & ({ variables: GetAuthorBySlugQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAuthorBySlugQuery, GetAuthorBySlugQueryVariables>(GetAuthorBySlugDocument, options);
      }
export function useGetAuthorBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAuthorBySlugQuery, GetAuthorBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAuthorBySlugQuery, GetAuthorBySlugQueryVariables>(GetAuthorBySlugDocument, options);
        }
export function useGetAuthorBySlugSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAuthorBySlugQuery, GetAuthorBySlugQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAuthorBySlugQuery, GetAuthorBySlugQueryVariables>(GetAuthorBySlugDocument, options);
        }
export type GetAuthorBySlugQueryHookResult = ReturnType<typeof useGetAuthorBySlugQuery>;
export type GetAuthorBySlugLazyQueryHookResult = ReturnType<typeof useGetAuthorBySlugLazyQuery>;
export type GetAuthorBySlugSuspenseQueryHookResult = ReturnType<typeof useGetAuthorBySlugSuspenseQuery>;
export type GetAuthorBySlugQueryResult = Apollo.QueryResult<GetAuthorBySlugQuery, GetAuthorBySlugQueryVariables>;
export const GetCategoriesDocument = gql`
    query GetCategories($sort: [String]) {
  categories(sort: $sort) {
    documentId
    name
    slug
    description
  }
}
    `;

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
      }
export function useGetCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export function useGetCategoriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesSuspenseQueryHookResult = ReturnType<typeof useGetCategoriesSuspenseQuery>;
export type GetCategoriesQueryResult = Apollo.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const GetCategoryBySlugDocument = gql`
    query GetCategoryBySlug($slug: String!) {
  categories(filters: {slug: {eq: $slug}}) {
    documentId
    name
    slug
    description
  }
}
    `;

/**
 * __useGetCategoryBySlugQuery__
 *
 * To run a query within a React component, call `useGetCategoryBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetCategoryBySlugQuery(baseOptions: Apollo.QueryHookOptions<GetCategoryBySlugQuery, GetCategoryBySlugQueryVariables> & ({ variables: GetCategoryBySlugQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoryBySlugQuery, GetCategoryBySlugQueryVariables>(GetCategoryBySlugDocument, options);
      }
export function useGetCategoryBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoryBySlugQuery, GetCategoryBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoryBySlugQuery, GetCategoryBySlugQueryVariables>(GetCategoryBySlugDocument, options);
        }
export function useGetCategoryBySlugSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCategoryBySlugQuery, GetCategoryBySlugQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCategoryBySlugQuery, GetCategoryBySlugQueryVariables>(GetCategoryBySlugDocument, options);
        }
export type GetCategoryBySlugQueryHookResult = ReturnType<typeof useGetCategoryBySlugQuery>;
export type GetCategoryBySlugLazyQueryHookResult = ReturnType<typeof useGetCategoryBySlugLazyQuery>;
export type GetCategoryBySlugSuspenseQueryHookResult = ReturnType<typeof useGetCategoryBySlugSuspenseQuery>;
export type GetCategoryBySlugQueryResult = Apollo.QueryResult<GetCategoryBySlugQuery, GetCategoryBySlugQueryVariables>;
export const GetPostsDocument = gql`
    query GetPosts($pagination: PaginationArg, $filters: PostFiltersInput, $sort: [String]) {
  posts(pagination: $pagination, filters: $filters, sort: $sort) {
    documentId
    title
    slug
    content
    published_date
    coverImage {
      documentId
      url
      alternativeText
      width
      height
    }
    author {
      documentId
      name
      slug
      avatar {
        documentId
        url
      }
    }
    category {
      documentId
      name
      slug
    }
    tags {
      documentId
      name
      slug
    }
  }
}
    `;

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *      filters: // value for 'filters'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
      }
export function useGetPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
        }
export function useGetPostsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
        }
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>;
export type GetPostsSuspenseQueryHookResult = ReturnType<typeof useGetPostsSuspenseQuery>;
export type GetPostsQueryResult = Apollo.QueryResult<GetPostsQuery, GetPostsQueryVariables>;
export const GetPostBySlugDocument = gql`
    query GetPostBySlug($slug: String!) {
  posts(filters: {slug: {eq: $slug}}) {
    documentId
    title
    slug
    content
    published_date
    coverImage {
      documentId
      url
      alternativeText
      width
      height
    }
    author {
      documentId
      name
      slug
      Email
      bio
      avatar {
        documentId
        url
      }
    }
    category {
      documentId
      name
      slug
      description
    }
    tags {
      documentId
      name
      slug
    }
    comments {
      documentId
      content
      authorName
      approved
      createdAt
    }
  }
}
    `;

/**
 * __useGetPostBySlugQuery__
 *
 * To run a query within a React component, call `useGetPostBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetPostBySlugQuery(baseOptions: Apollo.QueryHookOptions<GetPostBySlugQuery, GetPostBySlugQueryVariables> & ({ variables: GetPostBySlugQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostBySlugQuery, GetPostBySlugQueryVariables>(GetPostBySlugDocument, options);
      }
export function useGetPostBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostBySlugQuery, GetPostBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostBySlugQuery, GetPostBySlugQueryVariables>(GetPostBySlugDocument, options);
        }
export function useGetPostBySlugSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPostBySlugQuery, GetPostBySlugQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPostBySlugQuery, GetPostBySlugQueryVariables>(GetPostBySlugDocument, options);
        }
export type GetPostBySlugQueryHookResult = ReturnType<typeof useGetPostBySlugQuery>;
export type GetPostBySlugLazyQueryHookResult = ReturnType<typeof useGetPostBySlugLazyQuery>;
export type GetPostBySlugSuspenseQueryHookResult = ReturnType<typeof useGetPostBySlugSuspenseQuery>;
export type GetPostBySlugQueryResult = Apollo.QueryResult<GetPostBySlugQuery, GetPostBySlugQueryVariables>;
export const GetPostSlugsDocument = gql`
    query GetPostSlugs {
  posts(pagination: {limit: 1000}) {
    documentId
    slug
  }
}
    `;

/**
 * __useGetPostSlugsQuery__
 *
 * To run a query within a React component, call `useGetPostSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostSlugsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPostSlugsQuery(baseOptions?: Apollo.QueryHookOptions<GetPostSlugsQuery, GetPostSlugsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostSlugsQuery, GetPostSlugsQueryVariables>(GetPostSlugsDocument, options);
      }
export function useGetPostSlugsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostSlugsQuery, GetPostSlugsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostSlugsQuery, GetPostSlugsQueryVariables>(GetPostSlugsDocument, options);
        }
export function useGetPostSlugsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPostSlugsQuery, GetPostSlugsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPostSlugsQuery, GetPostSlugsQueryVariables>(GetPostSlugsDocument, options);
        }
export type GetPostSlugsQueryHookResult = ReturnType<typeof useGetPostSlugsQuery>;
export type GetPostSlugsLazyQueryHookResult = ReturnType<typeof useGetPostSlugsLazyQuery>;
export type GetPostSlugsSuspenseQueryHookResult = ReturnType<typeof useGetPostSlugsSuspenseQuery>;
export type GetPostSlugsQueryResult = Apollo.QueryResult<GetPostSlugsQuery, GetPostSlugsQueryVariables>;
export const GetTagsDocument = gql`
    query GetTags($sort: [String]) {
  tags(sort: $sort) {
    documentId
    name
    slug
  }
}
    `;

/**
 * __useGetTagsQuery__
 *
 * To run a query within a React component, call `useGetTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTagsQuery({
 *   variables: {
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetTagsQuery(baseOptions?: Apollo.QueryHookOptions<GetTagsQuery, GetTagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTagsQuery, GetTagsQueryVariables>(GetTagsDocument, options);
      }
export function useGetTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTagsQuery, GetTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTagsQuery, GetTagsQueryVariables>(GetTagsDocument, options);
        }
export function useGetTagsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetTagsQuery, GetTagsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTagsQuery, GetTagsQueryVariables>(GetTagsDocument, options);
        }
export type GetTagsQueryHookResult = ReturnType<typeof useGetTagsQuery>;
export type GetTagsLazyQueryHookResult = ReturnType<typeof useGetTagsLazyQuery>;
export type GetTagsSuspenseQueryHookResult = ReturnType<typeof useGetTagsSuspenseQuery>;
export type GetTagsQueryResult = Apollo.QueryResult<GetTagsQuery, GetTagsQueryVariables>;
export const GetTagBySlugDocument = gql`
    query GetTagBySlug($slug: String!) {
  tags(filters: {slug: {eq: $slug}}) {
    documentId
    name
    slug
  }
}
    `;

/**
 * __useGetTagBySlugQuery__
 *
 * To run a query within a React component, call `useGetTagBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTagBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTagBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetTagBySlugQuery(baseOptions: Apollo.QueryHookOptions<GetTagBySlugQuery, GetTagBySlugQueryVariables> & ({ variables: GetTagBySlugQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTagBySlugQuery, GetTagBySlugQueryVariables>(GetTagBySlugDocument, options);
      }
export function useGetTagBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTagBySlugQuery, GetTagBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTagBySlugQuery, GetTagBySlugQueryVariables>(GetTagBySlugDocument, options);
        }
export function useGetTagBySlugSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetTagBySlugQuery, GetTagBySlugQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTagBySlugQuery, GetTagBySlugQueryVariables>(GetTagBySlugDocument, options);
        }
export type GetTagBySlugQueryHookResult = ReturnType<typeof useGetTagBySlugQuery>;
export type GetTagBySlugLazyQueryHookResult = ReturnType<typeof useGetTagBySlugLazyQuery>;
export type GetTagBySlugSuspenseQueryHookResult = ReturnType<typeof useGetTagBySlugSuspenseQuery>;
export type GetTagBySlugQueryResult = Apollo.QueryResult<GetTagBySlugQuery, GetTagBySlugQueryVariables>;