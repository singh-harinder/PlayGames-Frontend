export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AuthenticatedItem = User;

/**  A keystone list  */
export type CartItem = {
  __typename?: "CartItem";
  id: Scalars["ID"];
  product?: Maybe<Product>;
  quantity?: Maybe<Scalars["Int"]>;
  user?: Maybe<User>;
};

export type CartItemCreateInput = {
  product?: InputMaybe<ProductRelateToOneInput>;
  quantity?: InputMaybe<Scalars["Int"]>;
  user?: InputMaybe<UserRelateToOneInput>;
};

export type CartItemRelateToManyInput = {
  connect?: InputMaybe<Array<InputMaybe<CartItemWhereUniqueInput>>>;
  create?: InputMaybe<Array<InputMaybe<CartItemCreateInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CartItemWhereUniqueInput>>>;
  disconnectAll?: InputMaybe<Scalars["Boolean"]>;
};

export type CartItemUpdateInput = {
  product?: InputMaybe<ProductRelateToOneInput>;
  quantity?: InputMaybe<Scalars["Int"]>;
  user?: InputMaybe<UserRelateToOneInput>;
};

export type CartItemWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<CartItemWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CartItemWhereInput>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  product?: InputMaybe<ProductWhereInput>;
  product_is_null?: InputMaybe<Scalars["Boolean"]>;
  quantity?: InputMaybe<Scalars["Int"]>;
  quantity_gt?: InputMaybe<Scalars["Int"]>;
  quantity_gte?: InputMaybe<Scalars["Int"]>;
  quantity_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  quantity_lt?: InputMaybe<Scalars["Int"]>;
  quantity_lte?: InputMaybe<Scalars["Int"]>;
  quantity_not?: InputMaybe<Scalars["Int"]>;
  quantity_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  user?: InputMaybe<UserWhereInput>;
  user_is_null?: InputMaybe<Scalars["Boolean"]>;
};

export type CartItemWhereUniqueInput = {
  id: Scalars["ID"];
};

export type CartItemsCreateInput = {
  data?: InputMaybe<CartItemCreateInput>;
};

export type CartItemsUpdateInput = {
  data?: InputMaybe<CartItemUpdateInput>;
  id: Scalars["ID"];
};

/**
 * Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference).
 * All options are strings as they ultimately end up in a URL.
 */
export type CloudinaryImageFormat = {
  angle?: InputMaybe<Scalars["String"]>;
  aspect_ratio?: InputMaybe<Scalars["String"]>;
  background?: InputMaybe<Scalars["String"]>;
  border?: InputMaybe<Scalars["String"]>;
  color?: InputMaybe<Scalars["String"]>;
  color_space?: InputMaybe<Scalars["String"]>;
  crop?: InputMaybe<Scalars["String"]>;
  default_image?: InputMaybe<Scalars["String"]>;
  delay?: InputMaybe<Scalars["String"]>;
  density?: InputMaybe<Scalars["String"]>;
  dpr?: InputMaybe<Scalars["String"]>;
  effect?: InputMaybe<Scalars["String"]>;
  fetch_format?: InputMaybe<Scalars["String"]>;
  flags?: InputMaybe<Scalars["String"]>;
  format?: InputMaybe<Scalars["String"]>;
  gravity?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["String"]>;
  opacity?: InputMaybe<Scalars["String"]>;
  overlay?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["String"]>;
  /**  Rewrites the filename to be this pretty string. Do not include `/` or `.`  */
  prettyName?: InputMaybe<Scalars["String"]>;
  quality?: InputMaybe<Scalars["String"]>;
  radius?: InputMaybe<Scalars["String"]>;
  transformation?: InputMaybe<Scalars["String"]>;
  underlay?: InputMaybe<Scalars["String"]>;
  width?: InputMaybe<Scalars["String"]>;
  x?: InputMaybe<Scalars["String"]>;
  y?: InputMaybe<Scalars["String"]>;
  zoom?: InputMaybe<Scalars["String"]>;
};

export type CloudinaryImage_File = {
  __typename?: "CloudinaryImage_File";
  encoding?: Maybe<Scalars["String"]>;
  filename?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  mimetype?: Maybe<Scalars["String"]>;
  originalFilename?: Maybe<Scalars["String"]>;
  path?: Maybe<Scalars["String"]>;
  publicUrl?: Maybe<Scalars["String"]>;
  publicUrlTransformed?: Maybe<Scalars["String"]>;
};

export type CloudinaryImage_FilePublicUrlTransformedArgs = {
  transformation?: InputMaybe<CloudinaryImageFormat>;
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
};

export type KeystoneAdminMeta = {
  __typename?: "KeystoneAdminMeta";
  enableSessionItem: Scalars["Boolean"];
  enableSignout: Scalars["Boolean"];
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};

export type KeystoneAdminMetaListArgs = {
  key: Scalars["String"];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: "KeystoneAdminUIFieldMeta";
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsHash?: Maybe<Scalars["String"]>;
  fieldMeta?: Maybe<Scalars["JSON"]>;
  isOrderable: Scalars["Boolean"];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars["String"];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars["String"];
  viewsHash: Scalars["String"];
};

export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id: Scalars["ID"];
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: "KeystoneAdminUIFieldMetaCreateView";
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = "edit",
  Hidden = "hidden",
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: "KeystoneAdminUIFieldMetaItemView";
  fieldMode: KeystoneAdminUiFieldMetaItemViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = "edit",
  Hidden = "hidden",
  Read = "read",
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: "KeystoneAdminUIFieldMetaListView";
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = "hidden",
  Read = "read",
}

export type KeystoneAdminUiListMeta = {
  __typename?: "KeystoneAdminUIListMeta";
  description?: Maybe<Scalars["String"]>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  hideCreate: Scalars["Boolean"];
  hideDelete: Scalars["Boolean"];
  initialColumns: Array<Scalars["String"]>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars["Boolean"];
  itemQueryName: Scalars["String"];
  key: Scalars["String"];
  label: Scalars["String"];
  labelField: Scalars["String"];
  listQueryName: Scalars["String"];
  pageSize: Scalars["Int"];
  path: Scalars["String"];
  plural: Scalars["String"];
  singular: Scalars["String"];
};

export type KeystoneAdminUiSort = {
  __typename?: "KeystoneAdminUISort";
  direction: KeystoneAdminUiSortDirection;
  field: Scalars["String"];
};

export enum KeystoneAdminUiSortDirection {
  Asc = "ASC",
  Desc = "DESC",
}

export type KeystoneMeta = {
  __typename?: "KeystoneMeta";
  adminMeta: KeystoneAdminMeta;
};

export type Mutation = {
  __typename?: "Mutation";
  addToCart?: Maybe<CartItem>;
  authenticateUserWithPassword: UserAuthenticationWithPasswordResult;
  checkout?: Maybe<Order>;
  /**  Create a single CartItem item.  */
  createCartItem?: Maybe<CartItem>;
  /**  Create multiple CartItem items.  */
  createCartItems?: Maybe<Array<Maybe<CartItem>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  /**  Create a single Order item.  */
  createOrder?: Maybe<Order>;
  /**  Create a single OrderItem item.  */
  createOrderItem?: Maybe<OrderItem>;
  /**  Create multiple OrderItem items.  */
  createOrderItems?: Maybe<Array<Maybe<OrderItem>>>;
  /**  Create multiple Order items.  */
  createOrders?: Maybe<Array<Maybe<Order>>>;
  /**  Create a single Product item.  */
  createProduct?: Maybe<Product>;
  /**  Create a single ProductImage item.  */
  createProductImage?: Maybe<ProductImage>;
  /**  Create multiple ProductImage items.  */
  createProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Create multiple Product items.  */
  createProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Create a single Role item.  */
  createRole?: Maybe<Role>;
  /**  Create multiple Role items.  */
  createRoles?: Maybe<Array<Maybe<Role>>>;
  /**  Create a single User item.  */
  createUser?: Maybe<User>;
  /**  Create a single UserAddress item.  */
  createUserAddress?: Maybe<UserAddress>;
  /**  Create multiple UserAddress items.  */
  createUserAddresses?: Maybe<Array<Maybe<UserAddress>>>;
  /**  Create multiple User items.  */
  createUsers?: Maybe<Array<Maybe<User>>>;
  /**  Delete a single CartItem item by ID.  */
  deleteCartItem?: Maybe<CartItem>;
  /**  Delete multiple CartItem items by ID.  */
  deleteCartItems?: Maybe<Array<Maybe<CartItem>>>;
  /**  Delete a single Order item by ID.  */
  deleteOrder?: Maybe<Order>;
  /**  Delete a single OrderItem item by ID.  */
  deleteOrderItem?: Maybe<OrderItem>;
  /**  Delete multiple OrderItem items by ID.  */
  deleteOrderItems?: Maybe<Array<Maybe<OrderItem>>>;
  /**  Delete multiple Order items by ID.  */
  deleteOrders?: Maybe<Array<Maybe<Order>>>;
  /**  Delete a single Product item by ID.  */
  deleteProduct?: Maybe<Product>;
  /**  Delete a single ProductImage item by ID.  */
  deleteProductImage?: Maybe<ProductImage>;
  /**  Delete multiple ProductImage items by ID.  */
  deleteProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Delete multiple Product items by ID.  */
  deleteProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Delete a single Role item by ID.  */
  deleteRole?: Maybe<Role>;
  /**  Delete multiple Role items by ID.  */
  deleteRoles?: Maybe<Array<Maybe<Role>>>;
  /**  Delete a single User item by ID.  */
  deleteUser?: Maybe<User>;
  /**  Delete a single UserAddress item by ID.  */
  deleteUserAddress?: Maybe<UserAddress>;
  /**  Delete multiple UserAddress items by ID.  */
  deleteUserAddresses?: Maybe<Array<Maybe<UserAddress>>>;
  /**  Delete multiple User items by ID.  */
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars["Boolean"];
  redeemUserPasswordResetToken?: Maybe<RedeemUserPasswordResetTokenResult>;
  sendUserPasswordResetLink?: Maybe<SendUserPasswordResetLinkResult>;
  /**  Update a single CartItem item by ID.  */
  updateCartItem?: Maybe<CartItem>;
  /**  Update multiple CartItem items by ID.  */
  updateCartItems?: Maybe<Array<Maybe<CartItem>>>;
  /**  Update a single Order item by ID.  */
  updateOrder?: Maybe<Order>;
  /**  Update a single OrderItem item by ID.  */
  updateOrderItem?: Maybe<OrderItem>;
  /**  Update multiple OrderItem items by ID.  */
  updateOrderItems?: Maybe<Array<Maybe<OrderItem>>>;
  /**  Update multiple Order items by ID.  */
  updateOrders?: Maybe<Array<Maybe<Order>>>;
  /**  Update a single Product item by ID.  */
  updateProduct?: Maybe<Product>;
  /**  Update a single ProductImage item by ID.  */
  updateProductImage?: Maybe<ProductImage>;
  /**  Update multiple ProductImage items by ID.  */
  updateProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Update multiple Product items by ID.  */
  updateProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Update a single Role item by ID.  */
  updateRole?: Maybe<Role>;
  /**  Update multiple Role items by ID.  */
  updateRoles?: Maybe<Array<Maybe<Role>>>;
  /**  Update a single User item by ID.  */
  updateUser?: Maybe<User>;
  /**  Update a single UserAddress item by ID.  */
  updateUserAddress?: Maybe<UserAddress>;
  /**  Update multiple UserAddress items by ID.  */
  updateUserAddresses?: Maybe<Array<Maybe<UserAddress>>>;
  /**  Update multiple User items by ID.  */
  updateUsers?: Maybe<Array<Maybe<User>>>;
};

export type MutationAddToCartArgs = {
  productId?: InputMaybe<Scalars["ID"]>;
};

export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationCheckoutArgs = {
  token: Scalars["String"];
};

export type MutationCreateCartItemArgs = {
  data?: InputMaybe<CartItemCreateInput>;
};

export type MutationCreateCartItemsArgs = {
  data?: InputMaybe<Array<InputMaybe<CartItemsCreateInput>>>;
};

export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};

export type MutationCreateOrderArgs = {
  data?: InputMaybe<OrderCreateInput>;
};

export type MutationCreateOrderItemArgs = {
  data?: InputMaybe<OrderItemCreateInput>;
};

export type MutationCreateOrderItemsArgs = {
  data?: InputMaybe<Array<InputMaybe<OrderItemsCreateInput>>>;
};

export type MutationCreateOrdersArgs = {
  data?: InputMaybe<Array<InputMaybe<OrdersCreateInput>>>;
};

export type MutationCreateProductArgs = {
  data?: InputMaybe<ProductCreateInput>;
};

export type MutationCreateProductImageArgs = {
  data?: InputMaybe<ProductImageCreateInput>;
};

export type MutationCreateProductImagesArgs = {
  data?: InputMaybe<Array<InputMaybe<ProductImagesCreateInput>>>;
};

export type MutationCreateProductsArgs = {
  data?: InputMaybe<Array<InputMaybe<ProductsCreateInput>>>;
};

export type MutationCreateRoleArgs = {
  data?: InputMaybe<RoleCreateInput>;
};

export type MutationCreateRolesArgs = {
  data?: InputMaybe<Array<InputMaybe<RolesCreateInput>>>;
};

export type MutationCreateUserArgs = {
  data?: InputMaybe<UserCreateInput>;
};

export type MutationCreateUserAddressArgs = {
  data?: InputMaybe<UserAddressCreateInput>;
};

export type MutationCreateUserAddressesArgs = {
  data?: InputMaybe<Array<InputMaybe<UserAddressesCreateInput>>>;
};

export type MutationCreateUsersArgs = {
  data?: InputMaybe<Array<InputMaybe<UsersCreateInput>>>;
};

export type MutationDeleteCartItemArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteCartItemsArgs = {
  ids?: InputMaybe<Array<Scalars["ID"]>>;
};

export type MutationDeleteOrderArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteOrderItemArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteOrderItemsArgs = {
  ids?: InputMaybe<Array<Scalars["ID"]>>;
};

export type MutationDeleteOrdersArgs = {
  ids?: InputMaybe<Array<Scalars["ID"]>>;
};

export type MutationDeleteProductArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteProductImageArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteProductImagesArgs = {
  ids?: InputMaybe<Array<Scalars["ID"]>>;
};

export type MutationDeleteProductsArgs = {
  ids?: InputMaybe<Array<Scalars["ID"]>>;
};

export type MutationDeleteRoleArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteRolesArgs = {
  ids?: InputMaybe<Array<Scalars["ID"]>>;
};

export type MutationDeleteUserArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteUserAddressArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteUserAddressesArgs = {
  ids?: InputMaybe<Array<Scalars["ID"]>>;
};

export type MutationDeleteUsersArgs = {
  ids?: InputMaybe<Array<Scalars["ID"]>>;
};

export type MutationRedeemUserPasswordResetTokenArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
  token: Scalars["String"];
};

export type MutationSendUserPasswordResetLinkArgs = {
  email: Scalars["String"];
};

export type MutationUpdateCartItemArgs = {
  data?: InputMaybe<CartItemUpdateInput>;
  id: Scalars["ID"];
};

export type MutationUpdateCartItemsArgs = {
  data?: InputMaybe<Array<InputMaybe<CartItemsUpdateInput>>>;
};

export type MutationUpdateOrderArgs = {
  data?: InputMaybe<OrderUpdateInput>;
  id: Scalars["ID"];
};

export type MutationUpdateOrderItemArgs = {
  data?: InputMaybe<OrderItemUpdateInput>;
  id: Scalars["ID"];
};

export type MutationUpdateOrderItemsArgs = {
  data?: InputMaybe<Array<InputMaybe<OrderItemsUpdateInput>>>;
};

export type MutationUpdateOrdersArgs = {
  data?: InputMaybe<Array<InputMaybe<OrdersUpdateInput>>>;
};

export type MutationUpdateProductArgs = {
  data?: InputMaybe<ProductUpdateInput>;
  id: Scalars["ID"];
};

export type MutationUpdateProductImageArgs = {
  data?: InputMaybe<ProductImageUpdateInput>;
  id: Scalars["ID"];
};

export type MutationUpdateProductImagesArgs = {
  data?: InputMaybe<Array<InputMaybe<ProductImagesUpdateInput>>>;
};

export type MutationUpdateProductsArgs = {
  data?: InputMaybe<Array<InputMaybe<ProductsUpdateInput>>>;
};

export type MutationUpdateRoleArgs = {
  data?: InputMaybe<RoleUpdateInput>;
  id: Scalars["ID"];
};

export type MutationUpdateRolesArgs = {
  data?: InputMaybe<Array<InputMaybe<RolesUpdateInput>>>;
};

export type MutationUpdateUserArgs = {
  data?: InputMaybe<UserUpdateInput>;
  id: Scalars["ID"];
};

export type MutationUpdateUserAddressArgs = {
  data?: InputMaybe<UserAddressUpdateInput>;
  id: Scalars["ID"];
};

export type MutationUpdateUserAddressesArgs = {
  data?: InputMaybe<Array<InputMaybe<UserAddressesUpdateInput>>>;
};

export type MutationUpdateUsersArgs = {
  data?: InputMaybe<Array<InputMaybe<UsersUpdateInput>>>;
};

/**  A keystone list  */
export type Order = {
  __typename?: "Order";
  _itemsMeta?: Maybe<_QueryMeta>;
  charge?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  items: Array<OrderItem>;
  label?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["Int"]>;
  user?: Maybe<User>;
};

/**  A keystone list  */
export type Order_ItemsMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortOrderItemsBy>>;
  where?: InputMaybe<OrderItemWhereInput>;
};

/**  A keystone list  */
export type OrderItemsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortOrderItemsBy>>;
  where?: InputMaybe<OrderItemWhereInput>;
};

export type OrderCreateInput = {
  charge?: InputMaybe<Scalars["String"]>;
  items?: InputMaybe<OrderItemRelateToManyInput>;
  total?: InputMaybe<Scalars["Int"]>;
  user?: InputMaybe<UserRelateToOneInput>;
};

/**  A keystone list  */
export type OrderItem = {
  __typename?: "OrderItem";
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  order?: Maybe<Order>;
  photo?: Maybe<ProductImage>;
  price?: Maybe<Scalars["Int"]>;
  quantity?: Maybe<Scalars["Int"]>;
};

export type OrderItemCreateInput = {
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<OrderRelateToOneInput>;
  photo?: InputMaybe<ProductImageRelateToOneInput>;
  price?: InputMaybe<Scalars["Int"]>;
  quantity?: InputMaybe<Scalars["Int"]>;
};

export type OrderItemRelateToManyInput = {
  connect?: InputMaybe<Array<InputMaybe<OrderItemWhereUniqueInput>>>;
  create?: InputMaybe<Array<InputMaybe<OrderItemCreateInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<OrderItemWhereUniqueInput>>>;
  disconnectAll?: InputMaybe<Scalars["Boolean"]>;
};

export type OrderItemUpdateInput = {
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<OrderRelateToOneInput>;
  photo?: InputMaybe<ProductImageRelateToOneInput>;
  price?: InputMaybe<Scalars["Int"]>;
  quantity?: InputMaybe<Scalars["Int"]>;
};

export type OrderItemWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<OrderItemWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<OrderItemWhereInput>>>;
  description?: InputMaybe<Scalars["String"]>;
  description_contains?: InputMaybe<Scalars["String"]>;
  description_contains_i?: InputMaybe<Scalars["String"]>;
  description_ends_with?: InputMaybe<Scalars["String"]>;
  description_ends_with_i?: InputMaybe<Scalars["String"]>;
  description_i?: InputMaybe<Scalars["String"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  description_not?: InputMaybe<Scalars["String"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  description_not_contains_i?: InputMaybe<Scalars["String"]>;
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  description_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  description_not_i?: InputMaybe<Scalars["String"]>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  description_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  description_starts_with?: InputMaybe<Scalars["String"]>;
  description_starts_with_i?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_i?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_i?: InputMaybe<Scalars["String"]>;
  name_i?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_i?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  name_not_i?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_i?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<OrderWhereInput>;
  order_is_null?: InputMaybe<Scalars["Boolean"]>;
  photo?: InputMaybe<ProductImageWhereInput>;
  photo_is_null?: InputMaybe<Scalars["Boolean"]>;
  price?: InputMaybe<Scalars["Int"]>;
  price_gt?: InputMaybe<Scalars["Int"]>;
  price_gte?: InputMaybe<Scalars["Int"]>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  price_lt?: InputMaybe<Scalars["Int"]>;
  price_lte?: InputMaybe<Scalars["Int"]>;
  price_not?: InputMaybe<Scalars["Int"]>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  quantity?: InputMaybe<Scalars["Int"]>;
  quantity_gt?: InputMaybe<Scalars["Int"]>;
  quantity_gte?: InputMaybe<Scalars["Int"]>;
  quantity_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  quantity_lt?: InputMaybe<Scalars["Int"]>;
  quantity_lte?: InputMaybe<Scalars["Int"]>;
  quantity_not?: InputMaybe<Scalars["Int"]>;
  quantity_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type OrderItemWhereUniqueInput = {
  id: Scalars["ID"];
};

export type OrderItemsCreateInput = {
  data?: InputMaybe<OrderItemCreateInput>;
};

export type OrderItemsUpdateInput = {
  data?: InputMaybe<OrderItemUpdateInput>;
  id: Scalars["ID"];
};

export type OrderRelateToManyInput = {
  connect?: InputMaybe<Array<InputMaybe<OrderWhereUniqueInput>>>;
  create?: InputMaybe<Array<InputMaybe<OrderCreateInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<OrderWhereUniqueInput>>>;
  disconnectAll?: InputMaybe<Scalars["Boolean"]>;
};

export type OrderRelateToOneInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  create?: InputMaybe<OrderCreateInput>;
  disconnect?: InputMaybe<OrderWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars["Boolean"]>;
};

export type OrderUpdateInput = {
  charge?: InputMaybe<Scalars["String"]>;
  items?: InputMaybe<OrderItemRelateToManyInput>;
  total?: InputMaybe<Scalars["Int"]>;
  user?: InputMaybe<UserRelateToOneInput>;
};

export type OrderWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<OrderWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<OrderWhereInput>>>;
  charge?: InputMaybe<Scalars["String"]>;
  charge_contains?: InputMaybe<Scalars["String"]>;
  charge_contains_i?: InputMaybe<Scalars["String"]>;
  charge_ends_with?: InputMaybe<Scalars["String"]>;
  charge_ends_with_i?: InputMaybe<Scalars["String"]>;
  charge_i?: InputMaybe<Scalars["String"]>;
  charge_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  charge_not?: InputMaybe<Scalars["String"]>;
  charge_not_contains?: InputMaybe<Scalars["String"]>;
  charge_not_contains_i?: InputMaybe<Scalars["String"]>;
  charge_not_ends_with?: InputMaybe<Scalars["String"]>;
  charge_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  charge_not_i?: InputMaybe<Scalars["String"]>;
  charge_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  charge_not_starts_with?: InputMaybe<Scalars["String"]>;
  charge_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  charge_starts_with?: InputMaybe<Scalars["String"]>;
  charge_starts_with_i?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /**  condition must be true for all nodes  */
  items_every?: InputMaybe<OrderItemWhereInput>;
  /**  condition must be false for all nodes  */
  items_none?: InputMaybe<OrderItemWhereInput>;
  /**  condition must be true for at least 1 node  */
  items_some?: InputMaybe<OrderItemWhereInput>;
  total?: InputMaybe<Scalars["Int"]>;
  total_gt?: InputMaybe<Scalars["Int"]>;
  total_gte?: InputMaybe<Scalars["Int"]>;
  total_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  total_lt?: InputMaybe<Scalars["Int"]>;
  total_lte?: InputMaybe<Scalars["Int"]>;
  total_not?: InputMaybe<Scalars["Int"]>;
  total_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  user?: InputMaybe<UserWhereInput>;
  user_is_null?: InputMaybe<Scalars["Boolean"]>;
};

export type OrderWhereUniqueInput = {
  id: Scalars["ID"];
};

export type OrdersCreateInput = {
  data?: InputMaybe<OrderCreateInput>;
};

export type OrdersUpdateInput = {
  data?: InputMaybe<OrderUpdateInput>;
  id: Scalars["ID"];
};

export enum PasswordAuthErrorCode {
  Failure = "FAILURE",
  IdentityNotFound = "IDENTITY_NOT_FOUND",
  MultipleIdentityMatches = "MULTIPLE_IDENTITY_MATCHES",
  SecretMismatch = "SECRET_MISMATCH",
  SecretNotSet = "SECRET_NOT_SET",
}

export enum PasswordResetRedemptionErrorCode {
  Failure = "FAILURE",
  IdentityNotFound = "IDENTITY_NOT_FOUND",
  MultipleIdentityMatches = "MULTIPLE_IDENTITY_MATCHES",
  TokenExpired = "TOKEN_EXPIRED",
  TokenMismatch = "TOKEN_MISMATCH",
  TokenNotSet = "TOKEN_NOT_SET",
  TokenRedeemed = "TOKEN_REDEEMED",
}

export enum PasswordResetRequestErrorCode {
  IdentityNotFound = "IDENTITY_NOT_FOUND",
  MultipleIdentityMatches = "MULTIPLE_IDENTITY_MATCHES",
}

/**  A keystone list  */
export type Product = {
  __typename?: "Product";
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  photo?: Maybe<ProductImage>;
  price?: Maybe<Scalars["Int"]>;
  status?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
};

export type ProductCreateInput = {
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  photo?: InputMaybe<ProductImageRelateToOneInput>;
  price?: InputMaybe<Scalars["Int"]>;
  status?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<UserRelateToOneInput>;
};

/**  A keystone list  */
export type ProductImage = {
  __typename?: "ProductImage";
  altText?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  image?: Maybe<CloudinaryImage_File>;
  product?: Maybe<Product>;
};

export type ProductImageCreateInput = {
  altText?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<Scalars["Upload"]>;
  product?: InputMaybe<ProductRelateToOneInput>;
};

export type ProductImageRelateToOneInput = {
  connect?: InputMaybe<ProductImageWhereUniqueInput>;
  create?: InputMaybe<ProductImageCreateInput>;
  disconnect?: InputMaybe<ProductImageWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars["Boolean"]>;
};

export type ProductImageUpdateInput = {
  altText?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<Scalars["Upload"]>;
  product?: InputMaybe<ProductRelateToOneInput>;
};

export type ProductImageWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<ProductImageWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductImageWhereInput>>>;
  altText?: InputMaybe<Scalars["String"]>;
  altText_contains?: InputMaybe<Scalars["String"]>;
  altText_contains_i?: InputMaybe<Scalars["String"]>;
  altText_ends_with?: InputMaybe<Scalars["String"]>;
  altText_ends_with_i?: InputMaybe<Scalars["String"]>;
  altText_i?: InputMaybe<Scalars["String"]>;
  altText_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  altText_not?: InputMaybe<Scalars["String"]>;
  altText_not_contains?: InputMaybe<Scalars["String"]>;
  altText_not_contains_i?: InputMaybe<Scalars["String"]>;
  altText_not_ends_with?: InputMaybe<Scalars["String"]>;
  altText_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  altText_not_i?: InputMaybe<Scalars["String"]>;
  altText_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  altText_not_starts_with?: InputMaybe<Scalars["String"]>;
  altText_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  altText_starts_with?: InputMaybe<Scalars["String"]>;
  altText_starts_with_i?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  image?: InputMaybe<Scalars["String"]>;
  image_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  image_not?: InputMaybe<Scalars["String"]>;
  image_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  product?: InputMaybe<ProductWhereInput>;
  product_is_null?: InputMaybe<Scalars["Boolean"]>;
};

export type ProductImageWhereUniqueInput = {
  id: Scalars["ID"];
};

export type ProductImagesCreateInput = {
  data?: InputMaybe<ProductImageCreateInput>;
};

export type ProductImagesUpdateInput = {
  data?: InputMaybe<ProductImageUpdateInput>;
  id: Scalars["ID"];
};

export type ProductRelateToManyInput = {
  connect?: InputMaybe<Array<InputMaybe<ProductWhereUniqueInput>>>;
  create?: InputMaybe<Array<InputMaybe<ProductCreateInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<ProductWhereUniqueInput>>>;
  disconnectAll?: InputMaybe<Scalars["Boolean"]>;
};

export type ProductRelateToOneInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  create?: InputMaybe<ProductCreateInput>;
  disconnect?: InputMaybe<ProductWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars["Boolean"]>;
};

export type ProductUpdateInput = {
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  photo?: InputMaybe<ProductImageRelateToOneInput>;
  price?: InputMaybe<Scalars["Int"]>;
  status?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<UserRelateToOneInput>;
};

export type ProductWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<ProductWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductWhereInput>>>;
  description?: InputMaybe<Scalars["String"]>;
  description_contains?: InputMaybe<Scalars["String"]>;
  description_contains_i?: InputMaybe<Scalars["String"]>;
  description_ends_with?: InputMaybe<Scalars["String"]>;
  description_ends_with_i?: InputMaybe<Scalars["String"]>;
  description_i?: InputMaybe<Scalars["String"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  description_not?: InputMaybe<Scalars["String"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  description_not_contains_i?: InputMaybe<Scalars["String"]>;
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  description_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  description_not_i?: InputMaybe<Scalars["String"]>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  description_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  description_starts_with?: InputMaybe<Scalars["String"]>;
  description_starts_with_i?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_i?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_i?: InputMaybe<Scalars["String"]>;
  name_i?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_i?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  name_not_i?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_i?: InputMaybe<Scalars["String"]>;
  photo?: InputMaybe<ProductImageWhereInput>;
  photo_is_null?: InputMaybe<Scalars["Boolean"]>;
  price?: InputMaybe<Scalars["Int"]>;
  price_gt?: InputMaybe<Scalars["Int"]>;
  price_gte?: InputMaybe<Scalars["Int"]>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  price_lt?: InputMaybe<Scalars["Int"]>;
  price_lte?: InputMaybe<Scalars["Int"]>;
  price_not?: InputMaybe<Scalars["Int"]>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  status?: InputMaybe<Scalars["String"]>;
  status_contains?: InputMaybe<Scalars["String"]>;
  status_contains_i?: InputMaybe<Scalars["String"]>;
  status_ends_with?: InputMaybe<Scalars["String"]>;
  status_ends_with_i?: InputMaybe<Scalars["String"]>;
  status_i?: InputMaybe<Scalars["String"]>;
  status_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  status_not?: InputMaybe<Scalars["String"]>;
  status_not_contains?: InputMaybe<Scalars["String"]>;
  status_not_contains_i?: InputMaybe<Scalars["String"]>;
  status_not_ends_with?: InputMaybe<Scalars["String"]>;
  status_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  status_not_i?: InputMaybe<Scalars["String"]>;
  status_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  status_not_starts_with?: InputMaybe<Scalars["String"]>;
  status_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  status_starts_with?: InputMaybe<Scalars["String"]>;
  status_starts_with_i?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<UserWhereInput>;
  user_is_null?: InputMaybe<Scalars["Boolean"]>;
};

export type ProductWhereUniqueInput = {
  id: Scalars["ID"];
};

export type ProductsCreateInput = {
  data?: InputMaybe<ProductCreateInput>;
};

export type ProductsUpdateInput = {
  data?: InputMaybe<ProductUpdateInput>;
  id: Scalars["ID"];
};

export type Query = {
  __typename?: "Query";
  /**  Search for the CartItem item with the matching ID.  */
  CartItem?: Maybe<CartItem>;
  /**  Search for the Order item with the matching ID.  */
  Order?: Maybe<Order>;
  /**  Search for the OrderItem item with the matching ID.  */
  OrderItem?: Maybe<OrderItem>;
  /**  Search for the Product item with the matching ID.  */
  Product?: Maybe<Product>;
  /**  Search for the ProductImage item with the matching ID.  */
  ProductImage?: Maybe<ProductImage>;
  /**  Search for the Role item with the matching ID.  */
  Role?: Maybe<Role>;
  /**  Search for the User item with the matching ID.  */
  User?: Maybe<User>;
  /**  Search for the UserAddress item with the matching ID.  */
  UserAddress?: Maybe<UserAddress>;
  /**  Retrieve the meta-data for the CartItem list.  */
  _CartItemsMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the OrderItem list.  */
  _OrderItemsMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the Order list.  */
  _OrdersMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the ProductImage list.  */
  _ProductImagesMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the Product list.  */
  _ProductsMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the Role list.  */
  _RolesMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the UserAddress list.  */
  _UserAddressesMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the User list.  */
  _UsersMeta?: Maybe<_ListMeta>;
  /**  Perform a meta-query on all CartItem items which match the where clause.  */
  _allCartItemsMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all OrderItem items which match the where clause.  */
  _allOrderItemsMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all Order items which match the where clause.  */
  _allOrdersMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all ProductImage items which match the where clause.  */
  _allProductImagesMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all Product items which match the where clause.  */
  _allProductsMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all Role items which match the where clause.  */
  _allRolesMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all UserAddress items which match the where clause.  */
  _allUserAddressesMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all User items which match the where clause.  */
  _allUsersMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for all lists.  */
  _ksListsMeta?: Maybe<Array<Maybe<_ListMeta>>>;
  /**  Search for all CartItem items which match the where clause.  */
  allCartItems?: Maybe<Array<Maybe<CartItem>>>;
  /**  Search for all OrderItem items which match the where clause.  */
  allOrderItems?: Maybe<Array<Maybe<OrderItem>>>;
  /**  Search for all Order items which match the where clause.  */
  allOrders?: Maybe<Array<Maybe<Order>>>;
  /**  Search for all ProductImage items which match the where clause.  */
  allProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Search for all Product items which match the where clause.  */
  allProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Search for all Role items which match the where clause.  */
  allRoles?: Maybe<Array<Maybe<Role>>>;
  /**  Search for all UserAddress items which match the where clause.  */
  allUserAddresses?: Maybe<Array<Maybe<UserAddress>>>;
  /**  Search for all User items which match the where clause.  */
  allUsers?: Maybe<Array<Maybe<User>>>;
  /** The version of the Keystone application serving this API. */
  appVersion?: Maybe<Scalars["String"]>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  keystone: KeystoneMeta;
  validateUserPasswordResetToken?: Maybe<ValidateUserPasswordResetTokenResult>;
};

export type QueryCartItemArgs = {
  where: CartItemWhereUniqueInput;
};

export type QueryOrderArgs = {
  where: OrderWhereUniqueInput;
};

export type QueryOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
};

export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};

export type QueryProductImageArgs = {
  where: ProductImageWhereUniqueInput;
};

export type QueryRoleArgs = {
  where: RoleWhereUniqueInput;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryUserAddressArgs = {
  where: UserAddressWhereUniqueInput;
};

export type Query_AllCartItemsMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortCartItemsBy>>;
  where?: InputMaybe<CartItemWhereInput>;
};

export type Query_AllOrderItemsMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortOrderItemsBy>>;
  where?: InputMaybe<OrderItemWhereInput>;
};

export type Query_AllOrdersMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortOrdersBy>>;
  where?: InputMaybe<OrderWhereInput>;
};

export type Query_AllProductImagesMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortProductImagesBy>>;
  where?: InputMaybe<ProductImageWhereInput>;
};

export type Query_AllProductsMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortProductsBy>>;
  where?: InputMaybe<ProductWhereInput>;
};

export type Query_AllRolesMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortRolesBy>>;
  where?: InputMaybe<RoleWhereInput>;
};

export type Query_AllUserAddressesMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortUserAddressesBy>>;
  where?: InputMaybe<UserAddressWhereInput>;
};

export type Query_AllUsersMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortUsersBy>>;
  where?: InputMaybe<UserWhereInput>;
};

export type Query_KsListsMetaArgs = {
  where?: InputMaybe<_KsListsMetaInput>;
};

export type QueryAllCartItemsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortCartItemsBy>>;
  where?: InputMaybe<CartItemWhereInput>;
};

export type QueryAllOrderItemsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortOrderItemsBy>>;
  where?: InputMaybe<OrderItemWhereInput>;
};

export type QueryAllOrdersArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortOrdersBy>>;
  where?: InputMaybe<OrderWhereInput>;
};

export type QueryAllProductImagesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortProductImagesBy>>;
  where?: InputMaybe<ProductImageWhereInput>;
};

export type QueryAllProductsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortProductsBy>>;
  where?: InputMaybe<ProductWhereInput>;
};

export type QueryAllRolesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortRolesBy>>;
  where?: InputMaybe<RoleWhereInput>;
};

export type QueryAllUserAddressesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortUserAddressesBy>>;
  where?: InputMaybe<UserAddressWhereInput>;
};

export type QueryAllUsersArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortUsersBy>>;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryValidateUserPasswordResetTokenArgs = {
  email: Scalars["String"];
  token: Scalars["String"];
};

export type RedeemUserPasswordResetTokenResult = {
  __typename?: "RedeemUserPasswordResetTokenResult";
  code: PasswordResetRedemptionErrorCode;
  message: Scalars["String"];
};

/**  A keystone list  */
export type Role = {
  __typename?: "Role";
  _assignedToMeta?: Maybe<_QueryMeta>;
  assignedTo: Array<User>;
  canManageCart?: Maybe<Scalars["Boolean"]>;
  canManageOrders?: Maybe<Scalars["Boolean"]>;
  canManageProducts?: Maybe<Scalars["Boolean"]>;
  canManageRoles?: Maybe<Scalars["Boolean"]>;
  canManageUsers?: Maybe<Scalars["Boolean"]>;
  canSeeOtherUsers?: Maybe<Scalars["Boolean"]>;
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
};

/**  A keystone list  */
export type Role_AssignedToMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortUsersBy>>;
  where?: InputMaybe<UserWhereInput>;
};

/**  A keystone list  */
export type RoleAssignedToArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortUsersBy>>;
  where?: InputMaybe<UserWhereInput>;
};

export type RoleCreateInput = {
  assignedTo?: InputMaybe<UserRelateToManyInput>;
  canManageCart?: InputMaybe<Scalars["Boolean"]>;
  canManageOrders?: InputMaybe<Scalars["Boolean"]>;
  canManageProducts?: InputMaybe<Scalars["Boolean"]>;
  canManageRoles?: InputMaybe<Scalars["Boolean"]>;
  canManageUsers?: InputMaybe<Scalars["Boolean"]>;
  canSeeOtherUsers?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type RoleRelateToOneInput = {
  connect?: InputMaybe<RoleWhereUniqueInput>;
  create?: InputMaybe<RoleCreateInput>;
  disconnect?: InputMaybe<RoleWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars["Boolean"]>;
};

export type RoleUpdateInput = {
  assignedTo?: InputMaybe<UserRelateToManyInput>;
  canManageCart?: InputMaybe<Scalars["Boolean"]>;
  canManageOrders?: InputMaybe<Scalars["Boolean"]>;
  canManageProducts?: InputMaybe<Scalars["Boolean"]>;
  canManageRoles?: InputMaybe<Scalars["Boolean"]>;
  canManageUsers?: InputMaybe<Scalars["Boolean"]>;
  canSeeOtherUsers?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type RoleWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<RoleWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<RoleWhereInput>>>;
  /**  condition must be true for all nodes  */
  assignedTo_every?: InputMaybe<UserWhereInput>;
  /**  condition must be false for all nodes  */
  assignedTo_none?: InputMaybe<UserWhereInput>;
  /**  condition must be true for at least 1 node  */
  assignedTo_some?: InputMaybe<UserWhereInput>;
  canManageCart?: InputMaybe<Scalars["Boolean"]>;
  canManageCart_not?: InputMaybe<Scalars["Boolean"]>;
  canManageOrders?: InputMaybe<Scalars["Boolean"]>;
  canManageOrders_not?: InputMaybe<Scalars["Boolean"]>;
  canManageProducts?: InputMaybe<Scalars["Boolean"]>;
  canManageProducts_not?: InputMaybe<Scalars["Boolean"]>;
  canManageRoles?: InputMaybe<Scalars["Boolean"]>;
  canManageRoles_not?: InputMaybe<Scalars["Boolean"]>;
  canManageUsers?: InputMaybe<Scalars["Boolean"]>;
  canManageUsers_not?: InputMaybe<Scalars["Boolean"]>;
  canSeeOtherUsers?: InputMaybe<Scalars["Boolean"]>;
  canSeeOtherUsers_not?: InputMaybe<Scalars["Boolean"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_i?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_i?: InputMaybe<Scalars["String"]>;
  name_i?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_i?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  name_not_i?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_i?: InputMaybe<Scalars["String"]>;
};

export type RoleWhereUniqueInput = {
  id: Scalars["ID"];
};

export type RolesCreateInput = {
  data?: InputMaybe<RoleCreateInput>;
};

export type RolesUpdateInput = {
  data?: InputMaybe<RoleUpdateInput>;
  id: Scalars["ID"];
};

export type SendUserPasswordResetLinkResult = {
  __typename?: "SendUserPasswordResetLinkResult";
  code: PasswordResetRequestErrorCode;
  message: Scalars["String"];
};

export enum SortCartItemsBy {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  ProductAsc = "product_ASC",
  ProductDesc = "product_DESC",
  QuantityAsc = "quantity_ASC",
  QuantityDesc = "quantity_DESC",
  UserAsc = "user_ASC",
  UserDesc = "user_DESC",
}

export enum SortOrderItemsBy {
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  OrderAsc = "order_ASC",
  OrderDesc = "order_DESC",
  PhotoAsc = "photo_ASC",
  PhotoDesc = "photo_DESC",
  PriceAsc = "price_ASC",
  PriceDesc = "price_DESC",
  QuantityAsc = "quantity_ASC",
  QuantityDesc = "quantity_DESC",
}

export enum SortOrdersBy {
  ChargeAsc = "charge_ASC",
  ChargeDesc = "charge_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  ItemsAsc = "items_ASC",
  ItemsDesc = "items_DESC",
  TotalAsc = "total_ASC",
  TotalDesc = "total_DESC",
  UserAsc = "user_ASC",
  UserDesc = "user_DESC",
}

export enum SortProductImagesBy {
  AltTextAsc = "altText_ASC",
  AltTextDesc = "altText_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  ProductAsc = "product_ASC",
  ProductDesc = "product_DESC",
}

export enum SortProductsBy {
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PhotoAsc = "photo_ASC",
  PhotoDesc = "photo_DESC",
  PriceAsc = "price_ASC",
  PriceDesc = "price_DESC",
  StatusAsc = "status_ASC",
  StatusDesc = "status_DESC",
  UserAsc = "user_ASC",
  UserDesc = "user_DESC",
}

export enum SortRolesBy {
  AssignedToAsc = "assignedTo_ASC",
  AssignedToDesc = "assignedTo_DESC",
  CanManageCartAsc = "canManageCart_ASC",
  CanManageCartDesc = "canManageCart_DESC",
  CanManageOrdersAsc = "canManageOrders_ASC",
  CanManageOrdersDesc = "canManageOrders_DESC",
  CanManageProductsAsc = "canManageProducts_ASC",
  CanManageProductsDesc = "canManageProducts_DESC",
  CanManageRolesAsc = "canManageRoles_ASC",
  CanManageRolesDesc = "canManageRoles_DESC",
  CanManageUsersAsc = "canManageUsers_ASC",
  CanManageUsersDesc = "canManageUsers_DESC",
  CanSeeOtherUsersAsc = "canSeeOtherUsers_ASC",
  CanSeeOtherUsersDesc = "canSeeOtherUsers_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
}

export enum SortUserAddressesBy {
  CityAsc = "City_ASC",
  CityDesc = "City_DESC",
  StateAsc = "State_ASC",
  StateDesc = "State_DESC",
  HouseAsc = "house_ASC",
  HouseDesc = "house_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  UserAsc = "user_ASC",
  UserDesc = "user_DESC",
}

export enum SortUsersBy {
  AddressAsc = "address_ASC",
  AddressDesc = "address_DESC",
  CartAsc = "cart_ASC",
  CartDesc = "cart_DESC",
  EmailAsc = "email_ASC",
  EmailDesc = "email_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  MagicAuthIssuedAtAsc = "magicAuthIssuedAt_ASC",
  MagicAuthIssuedAtDesc = "magicAuthIssuedAt_DESC",
  MagicAuthRedeemedAtAsc = "magicAuthRedeemedAt_ASC",
  MagicAuthRedeemedAtDesc = "magicAuthRedeemedAt_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  OrdersAsc = "orders_ASC",
  OrdersDesc = "orders_DESC",
  PasswordResetIssuedAtAsc = "passwordResetIssuedAt_ASC",
  PasswordResetIssuedAtDesc = "passwordResetIssuedAt_DESC",
  PasswordResetRedeemedAtAsc = "passwordResetRedeemedAt_ASC",
  PasswordResetRedeemedAtDesc = "passwordResetRedeemedAt_DESC",
  ProductsAsc = "products_ASC",
  ProductsDesc = "products_DESC",
  RoleAsc = "role_ASC",
  RoleDesc = "role_DESC",
}

/**  A keystone list  */
export type User = {
  __typename?: "User";
  _cartMeta?: Maybe<_QueryMeta>;
  _ordersMeta?: Maybe<_QueryMeta>;
  _productsMeta?: Maybe<_QueryMeta>;
  address?: Maybe<UserAddress>;
  cart: Array<CartItem>;
  email?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  magicAuthIssuedAt?: Maybe<Scalars["String"]>;
  magicAuthRedeemedAt?: Maybe<Scalars["String"]>;
  magicAuthToken_is_set?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  orders: Array<Order>;
  passwordResetIssuedAt?: Maybe<Scalars["String"]>;
  passwordResetRedeemedAt?: Maybe<Scalars["String"]>;
  passwordResetToken_is_set?: Maybe<Scalars["Boolean"]>;
  password_is_set?: Maybe<Scalars["Boolean"]>;
  products: Array<Product>;
  role?: Maybe<Role>;
};

/**  A keystone list  */
export type User_CartMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortCartItemsBy>>;
  where?: InputMaybe<CartItemWhereInput>;
};

/**  A keystone list  */
export type User_OrdersMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortOrdersBy>>;
  where?: InputMaybe<OrderWhereInput>;
};

/**  A keystone list  */
export type User_ProductsMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortProductsBy>>;
  where?: InputMaybe<ProductWhereInput>;
};

/**  A keystone list  */
export type UserCartArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortCartItemsBy>>;
  where?: InputMaybe<CartItemWhereInput>;
};

/**  A keystone list  */
export type UserOrdersArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortOrdersBy>>;
  where?: InputMaybe<OrderWhereInput>;
};

/**  A keystone list  */
export type UserProductsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortProductsBy>>;
  where?: InputMaybe<ProductWhereInput>;
};

/**  A keystone list  */
export type UserAddress = {
  __typename?: "UserAddress";
  City?: Maybe<Scalars["String"]>;
  State?: Maybe<Scalars["String"]>;
  house?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  user?: Maybe<User>;
};

export type UserAddressCreateInput = {
  City?: InputMaybe<Scalars["String"]>;
  State?: InputMaybe<Scalars["String"]>;
  house?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<UserRelateToOneInput>;
};

export type UserAddressRelateToOneInput = {
  connect?: InputMaybe<UserAddressWhereUniqueInput>;
  create?: InputMaybe<UserAddressCreateInput>;
  disconnect?: InputMaybe<UserAddressWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars["Boolean"]>;
};

export type UserAddressUpdateInput = {
  City?: InputMaybe<Scalars["String"]>;
  State?: InputMaybe<Scalars["String"]>;
  house?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<UserRelateToOneInput>;
};

export type UserAddressWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<UserAddressWhereInput>>>;
  City?: InputMaybe<Scalars["String"]>;
  City_contains?: InputMaybe<Scalars["String"]>;
  City_contains_i?: InputMaybe<Scalars["String"]>;
  City_ends_with?: InputMaybe<Scalars["String"]>;
  City_ends_with_i?: InputMaybe<Scalars["String"]>;
  City_i?: InputMaybe<Scalars["String"]>;
  City_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  City_not?: InputMaybe<Scalars["String"]>;
  City_not_contains?: InputMaybe<Scalars["String"]>;
  City_not_contains_i?: InputMaybe<Scalars["String"]>;
  City_not_ends_with?: InputMaybe<Scalars["String"]>;
  City_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  City_not_i?: InputMaybe<Scalars["String"]>;
  City_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  City_not_starts_with?: InputMaybe<Scalars["String"]>;
  City_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  City_starts_with?: InputMaybe<Scalars["String"]>;
  City_starts_with_i?: InputMaybe<Scalars["String"]>;
  OR?: InputMaybe<Array<InputMaybe<UserAddressWhereInput>>>;
  State?: InputMaybe<Scalars["String"]>;
  State_contains?: InputMaybe<Scalars["String"]>;
  State_contains_i?: InputMaybe<Scalars["String"]>;
  State_ends_with?: InputMaybe<Scalars["String"]>;
  State_ends_with_i?: InputMaybe<Scalars["String"]>;
  State_i?: InputMaybe<Scalars["String"]>;
  State_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  State_not?: InputMaybe<Scalars["String"]>;
  State_not_contains?: InputMaybe<Scalars["String"]>;
  State_not_contains_i?: InputMaybe<Scalars["String"]>;
  State_not_ends_with?: InputMaybe<Scalars["String"]>;
  State_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  State_not_i?: InputMaybe<Scalars["String"]>;
  State_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  State_not_starts_with?: InputMaybe<Scalars["String"]>;
  State_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  State_starts_with?: InputMaybe<Scalars["String"]>;
  State_starts_with_i?: InputMaybe<Scalars["String"]>;
  house?: InputMaybe<Scalars["String"]>;
  house_contains?: InputMaybe<Scalars["String"]>;
  house_contains_i?: InputMaybe<Scalars["String"]>;
  house_ends_with?: InputMaybe<Scalars["String"]>;
  house_ends_with_i?: InputMaybe<Scalars["String"]>;
  house_i?: InputMaybe<Scalars["String"]>;
  house_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  house_not?: InputMaybe<Scalars["String"]>;
  house_not_contains?: InputMaybe<Scalars["String"]>;
  house_not_contains_i?: InputMaybe<Scalars["String"]>;
  house_not_ends_with?: InputMaybe<Scalars["String"]>;
  house_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  house_not_i?: InputMaybe<Scalars["String"]>;
  house_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  house_not_starts_with?: InputMaybe<Scalars["String"]>;
  house_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  house_starts_with?: InputMaybe<Scalars["String"]>;
  house_starts_with_i?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  user?: InputMaybe<UserWhereInput>;
  user_is_null?: InputMaybe<Scalars["Boolean"]>;
};

export type UserAddressWhereUniqueInput = {
  id: Scalars["ID"];
};

export type UserAddressesCreateInput = {
  data?: InputMaybe<UserAddressCreateInput>;
};

export type UserAddressesUpdateInput = {
  data?: InputMaybe<UserAddressUpdateInput>;
  id: Scalars["ID"];
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: "UserAuthenticationWithPasswordFailure";
  code: PasswordAuthErrorCode;
  message: Scalars["String"];
};

export type UserAuthenticationWithPasswordResult =
  | UserAuthenticationWithPasswordFailure
  | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: "UserAuthenticationWithPasswordSuccess";
  item: User;
  sessionToken: Scalars["String"];
};

export type UserCreateInput = {
  address?: InputMaybe<UserAddressRelateToOneInput>;
  cart?: InputMaybe<CartItemRelateToManyInput>;
  email?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt?: InputMaybe<Scalars["String"]>;
  magicAuthToken?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  orders?: InputMaybe<OrderRelateToManyInput>;
  password?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt?: InputMaybe<Scalars["String"]>;
  passwordResetToken?: InputMaybe<Scalars["String"]>;
  products?: InputMaybe<ProductRelateToManyInput>;
  role?: InputMaybe<RoleRelateToOneInput>;
};

export type UserRelateToManyInput = {
  connect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserCreateInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  disconnectAll?: InputMaybe<Scalars["Boolean"]>;
};

export type UserRelateToOneInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<UserWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars["Boolean"]>;
};

export type UserUpdateInput = {
  address?: InputMaybe<UserAddressRelateToOneInput>;
  cart?: InputMaybe<CartItemRelateToManyInput>;
  email?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt?: InputMaybe<Scalars["String"]>;
  magicAuthToken?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  orders?: InputMaybe<OrderRelateToManyInput>;
  password?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt?: InputMaybe<Scalars["String"]>;
  passwordResetToken?: InputMaybe<Scalars["String"]>;
  products?: InputMaybe<ProductRelateToManyInput>;
  role?: InputMaybe<RoleRelateToOneInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  address?: InputMaybe<UserAddressWhereInput>;
  address_is_null?: InputMaybe<Scalars["Boolean"]>;
  /**  condition must be true for all nodes  */
  cart_every?: InputMaybe<CartItemWhereInput>;
  /**  condition must be false for all nodes  */
  cart_none?: InputMaybe<CartItemWhereInput>;
  /**  condition must be true for at least 1 node  */
  cart_some?: InputMaybe<CartItemWhereInput>;
  email?: InputMaybe<Scalars["String"]>;
  email_contains?: InputMaybe<Scalars["String"]>;
  email_contains_i?: InputMaybe<Scalars["String"]>;
  email_ends_with?: InputMaybe<Scalars["String"]>;
  email_ends_with_i?: InputMaybe<Scalars["String"]>;
  email_i?: InputMaybe<Scalars["String"]>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  email_not?: InputMaybe<Scalars["String"]>;
  email_not_contains?: InputMaybe<Scalars["String"]>;
  email_not_contains_i?: InputMaybe<Scalars["String"]>;
  email_not_ends_with?: InputMaybe<Scalars["String"]>;
  email_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  email_not_i?: InputMaybe<Scalars["String"]>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  email_not_starts_with?: InputMaybe<Scalars["String"]>;
  email_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  email_starts_with?: InputMaybe<Scalars["String"]>;
  email_starts_with_i?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  magicAuthIssuedAt?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt_gt?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt_gte?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  magicAuthIssuedAt_lt?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt_lte?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt_not?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  magicAuthRedeemedAt?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt_gt?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt_gte?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  magicAuthRedeemedAt_lt?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt_lte?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt_not?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  magicAuthToken_is_set?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_i?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_i?: InputMaybe<Scalars["String"]>;
  name_i?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_i?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  name_not_i?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_i?: InputMaybe<Scalars["String"]>;
  /**  condition must be true for all nodes  */
  orders_every?: InputMaybe<OrderWhereInput>;
  /**  condition must be false for all nodes  */
  orders_none?: InputMaybe<OrderWhereInput>;
  /**  condition must be true for at least 1 node  */
  orders_some?: InputMaybe<OrderWhereInput>;
  passwordResetIssuedAt?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt_gt?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt_gte?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  passwordResetIssuedAt_lt?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt_lte?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt_not?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  passwordResetRedeemedAt?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt_gt?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt_gte?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  passwordResetRedeemedAt_lt?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt_lte?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt_not?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  passwordResetToken_is_set?: InputMaybe<Scalars["Boolean"]>;
  password_is_set?: InputMaybe<Scalars["Boolean"]>;
  /**  condition must be true for all nodes  */
  products_every?: InputMaybe<ProductWhereInput>;
  /**  condition must be false for all nodes  */
  products_none?: InputMaybe<ProductWhereInput>;
  /**  condition must be true for at least 1 node  */
  products_some?: InputMaybe<ProductWhereInput>;
  role?: InputMaybe<RoleWhereInput>;
  role_is_null?: InputMaybe<Scalars["Boolean"]>;
};

export type UserWhereUniqueInput = {
  id: Scalars["ID"];
};

export type UsersCreateInput = {
  data?: InputMaybe<UserCreateInput>;
};

export type UsersUpdateInput = {
  data?: InputMaybe<UserUpdateInput>;
  id: Scalars["ID"];
};

export type ValidateUserPasswordResetTokenResult = {
  __typename?: "ValidateUserPasswordResetTokenResult";
  code: PasswordResetRedemptionErrorCode;
  message: Scalars["String"];
};

export type _ListAccess = {
  __typename?: "_ListAccess";
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'auth' operations.
   */
  auth?: Maybe<Scalars["JSON"]>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'create' operations.
   * NOTE: 'create' can only return a Boolean.
   * It is not possible to specify a declarative Where clause for this
   * operation
   */
  create?: Maybe<Scalars["Boolean"]>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'delete' operations.
   */
  delete?: Maybe<Scalars["JSON"]>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'read' operations.
   */
  read?: Maybe<Scalars["JSON"]>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'update' operations.
   */
  update?: Maybe<Scalars["JSON"]>;
};

export type _ListInputTypes = {
  __typename?: "_ListInputTypes";
  /** Create mutation input type name */
  createInput?: Maybe<Scalars["String"]>;
  /** Create many mutation input type name */
  createManyInput?: Maybe<Scalars["String"]>;
  /** Update mutation name input */
  updateInput?: Maybe<Scalars["String"]>;
  /** Update many mutation name input */
  updateManyInput?: Maybe<Scalars["String"]>;
  /** Input type for matching multiple items */
  whereInput?: Maybe<Scalars["String"]>;
  /** Input type for matching a unique item */
  whereUniqueInput?: Maybe<Scalars["String"]>;
};

export type _ListMeta = {
  __typename?: "_ListMeta";
  /** Access control configuration for the currently authenticated request */
  access?: Maybe<_ListAccess>;
  /** The list's user-facing description */
  description?: Maybe<Scalars["String"]>;
  /** The Keystone list key */
  key?: Maybe<Scalars["String"]>;
  /** The list's display name in the Admin UI */
  label?: Maybe<Scalars["String"]>;
  /**
   * The Keystone List name
   * @deprecated Use `key` instead
   */
  name?: Maybe<Scalars["String"]>;
  /** The list's data path */
  path?: Maybe<Scalars["String"]>;
  /** The list's plural display name */
  plural?: Maybe<Scalars["String"]>;
  /** Information on the generated GraphQL schema */
  schema?: Maybe<_ListSchema>;
  /** The list's singular display name */
  singular?: Maybe<Scalars["String"]>;
};

export type _ListMutations = {
  __typename?: "_ListMutations";
  /** Create mutation name */
  create?: Maybe<Scalars["String"]>;
  /** Create many mutation name */
  createMany?: Maybe<Scalars["String"]>;
  /** Delete mutation name */
  delete?: Maybe<Scalars["String"]>;
  /** Delete many mutation name */
  deleteMany?: Maybe<Scalars["String"]>;
  /** Update mutation name */
  update?: Maybe<Scalars["String"]>;
  /** Update many mutation name */
  updateMany?: Maybe<Scalars["String"]>;
};

export type _ListQueries = {
  __typename?: "_ListQueries";
  /** Single-item query name */
  item?: Maybe<Scalars["String"]>;
  /** All-items query name */
  list?: Maybe<Scalars["String"]>;
  /** List metadata query name */
  meta?: Maybe<Scalars["String"]>;
};

export type _ListSchema = {
  __typename?: "_ListSchema";
  /** Information about fields defined on this list */
  fields?: Maybe<Array<Maybe<_ListSchemaFields>>>;
  /** Top-level GraphQL input types */
  inputTypes?: Maybe<_ListInputTypes>;
  /** Top-level GraphQL mutation names */
  mutations?: Maybe<_ListMutations>;
  /**
   * Top level GraphQL query names which either return this type, or
   * provide aggregate information about this type
   */
  queries?: Maybe<_ListQueries>;
  /**
   * Information about fields on other types which return this type, or
   * provide aggregate information about this type
   */
  relatedFields?: Maybe<Array<Maybe<_ListSchemaRelatedFields>>>;
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars["String"]>;
};

export type _ListSchemaFieldsArgs = {
  where?: InputMaybe<_ListSchemaFieldsInput>;
};

export type _ListSchemaFields = {
  __typename?: "_ListSchemaFields";
  /**
   * The name of the field in its list
   * @deprecated Use `path` instead
   */
  name?: Maybe<Scalars["String"]>;
  /** The path of the field in its list */
  path?: Maybe<Scalars["String"]>;
  /** The field type (ie, Checkbox, Text, etc) */
  type?: Maybe<Scalars["String"]>;
};

export type _ListSchemaFieldsInput = {
  type?: InputMaybe<Scalars["String"]>;
};

export type _ListSchemaRelatedFields = {
  __typename?: "_ListSchemaRelatedFields";
  /** A list of GraphQL field names */
  fields?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars["String"]>;
};

export type _QueryMeta = {
  __typename?: "_QueryMeta";
  count?: Maybe<Scalars["Int"]>;
};

export type _KsListsMetaInput = {
  /** Whether this is an auxiliary helper list */
  auxiliary?: InputMaybe<Scalars["Boolean"]>;
  key?: InputMaybe<Scalars["String"]>;
};
