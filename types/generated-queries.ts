import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from "@apollo/client/cache";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
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

export type AddToCartMutationVariables = Exact<{
  id: Scalars["ID"];
}>;

export type AddToCartMutation = { __typename?: "Mutation"; addToCart?: { __typename?: "CartItem"; id: string } | null };

export type AllOrdersQueryVariables = Exact<{ [key: string]: never }>;

export type AllOrdersQuery = {
  __typename?: "Query";
  allOrders?: Array<{
    __typename?: "Order";
    id: string;
    charge?: string | null;
    total?: number | null;
    user?: { __typename?: "User"; id: string } | null;
    items: Array<{
      __typename?: "OrderItem";
      id: string;
      name?: string | null;
      description?: string | null;
      price?: number | null;
      quantity?: number | null;
      photo?: {
        __typename?: "ProductImage";
        altText?: string | null;
        image?: { __typename?: "CloudinaryImage_File"; publicUrlTransformed?: string | null } | null;
      } | null;
    }>;
  } | null> | null;
};

export type AllProductsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
}>;

export type AllProductsQuery = {
  __typename?: "Query";
  allProducts?: Array<{
    __typename?: "Product";
    id: string;
    name?: string | null;
    description?: string | null;
    price?: number | null;
    photo?: {
      __typename?: "ProductImage";
      id: string;
      altText?: string | null;
      image?: { __typename?: "CloudinaryImage_File"; publicUrlTransformed?: string | null } | null;
    } | null;
  } | null> | null;
};

export type AllProductsCountQueryVariables = Exact<{ [key: string]: never }>;

export type AllProductsCountQuery = {
  __typename?: "Query";
  _allProductsMeta?: { __typename?: "_QueryMeta"; count?: number | null } | null;
};

export type CreateOrderMutationVariables = Exact<{
  token: Scalars["String"];
}>;

export type CreateOrderMutation = {
  __typename?: "Mutation";
  checkout?: {
    __typename?: "Order";
    id: string;
    charge?: string | null;
    total?: number | null;
    items: Array<{ __typename?: "OrderItem"; id: string; name?: string | null }>;
  } | null;
};

export type CreateProductMutationVariables = Exact<{
  name: Scalars["String"];
  description: Scalars["String"];
  price: Scalars["Int"];
  image: Scalars["Upload"];
}>;

export type CreateProductMutation = {
  __typename?: "Mutation";
  createProduct?: { __typename?: "Product"; id: string; name?: string | null } | null;
};

export type DeleteCartItemMutationVariables = Exact<{
  id: Scalars["ID"];
}>;

export type DeleteCartItemMutation = {
  __typename?: "Mutation";
  deleteCartItem?: { __typename?: "CartItem"; id: string } | null;
};

export type DeleteProductMutationVariables = Exact<{
  id: Scalars["ID"];
}>;

export type DeleteProductMutation = {
  __typename?: "Mutation";
  deleteProduct?: { __typename?: "Product"; id: string } | null;
};

export type GetOrderQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type GetOrderQuery = {
  __typename?: "Query";
  Order?: {
    __typename?: "Order";
    id: string;
    charge?: string | null;
    total?: number | null;
    user?: { __typename?: "User"; id: string } | null;
    items: Array<{
      __typename?: "OrderItem";
      id: string;
      name?: string | null;
      description?: string | null;
      price?: number | null;
      quantity?: number | null;
      photo?: {
        __typename?: "ProductImage";
        altText?: string | null;
        image?: { __typename?: "CloudinaryImage_File"; publicUrlTransformed?: string | null } | null;
      } | null;
    }>;
  } | null;
};

export type ProductQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type ProductQuery = {
  __typename?: "Query";
  Product?: {
    __typename?: "Product";
    id: string;
    name?: string | null;
    description?: string | null;
    price?: number | null;
    user?: { __typename?: "User"; id: string } | null;
    photo?: {
      __typename?: "ProductImage";
      altText?: string | null;
      image?: { __typename?: "CloudinaryImage_File"; publicUrlTransformed?: string | null } | null;
    } | null;
  } | null;
};

export type UserQueryVariables = Exact<{ [key: string]: never }>;

export type UserQuery = {
  __typename?: "Query";
  authenticatedItem?: {
    __typename?: "User";
    id: string;
    name?: string | null;
    email?: string | null;
    address?: {
      __typename?: "UserAddress";
      id: string;
      house?: string | null;
      City?: string | null;
      State?: string | null;
    } | null;
    products: Array<{
      __typename?: "Product";
      id: string;
      name?: string | null;
      price?: number | null;
      photo?: {
        __typename?: "ProductImage";
        image?: { __typename?: "CloudinaryImage_File"; publicUrlTransformed?: string | null } | null;
      } | null;
    }>;
    cart: Array<{
      __typename?: "CartItem";
      id: string;
      quantity?: number | null;
      product?: {
        __typename?: "Product";
        id: string;
        name?: string | null;
        description?: string | null;
        price?: number | null;
        photo?: {
          __typename?: "ProductImage";
          image?: { __typename?: "CloudinaryImage_File"; publicUrlTransformed?: string | null } | null;
        } | null;
      } | null;
    }>;
  } | null;
};

export type RequestResetMutationVariables = Exact<{
  email: Scalars["String"];
}>;

export type RequestResetMutation = {
  __typename?: "Mutation";
  sendUserPasswordResetLink?: {
    __typename?: "SendUserPasswordResetLinkResult";
    code: PasswordResetRequestErrorCode;
    message: string;
  } | null;
};

export type RedeemPasswordResetMutationVariables = Exact<{
  email: Scalars["String"];
  password: Scalars["String"];
  token: Scalars["String"];
}>;

export type RedeemPasswordResetMutation = {
  __typename?: "Mutation";
  redeemUserPasswordResetToken?: {
    __typename?: "RedeemUserPasswordResetTokenResult";
    code: PasswordResetRedemptionErrorCode;
    message: string;
  } | null;
};

export type SearchProductsQueryVariables = Exact<{
  searchTerm: Scalars["String"];
}>;

export type SearchProductsQuery = {
  __typename?: "Query";
  searchTerms?: Array<{
    __typename?: "Product";
    id: string;
    name?: string | null;
    photo?: {
      __typename?: "ProductImage";
      image?: { __typename?: "CloudinaryImage_File"; publicUrlTransformed?: string | null } | null;
    } | null;
  } | null> | null;
};

export type SignInMutationVariables = Exact<{
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type SignInMutation = {
  __typename?: "Mutation";
  authenticateUserWithPassword:
    | { __typename?: "UserAuthenticationWithPasswordFailure"; message: string }
    | {
        __typename?: "UserAuthenticationWithPasswordSuccess";
        item: { __typename?: "User"; id: string; email?: string | null; name?: string | null };
      };
};

export type SignOutMutationVariables = Exact<{ [key: string]: never }>;

export type SignOutMutation = { __typename?: "Mutation"; endSession: boolean };

export type SignUpMutationVariables = Exact<{
  name: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type SignUpMutation = {
  __typename?: "Mutation";
  createUser?: {
    __typename?: "User";
    id: string;
    email?: string | null;
    name?: string | null;
    address?: {
      __typename?: "UserAddress";
      id: string;
      house?: string | null;
      City?: string | null;
      State?: string | null;
    } | null;
  } | null;
};

export type UpdateProductMutationVariables = Exact<{
  id: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Int"]>;
}>;

export type UpdateProductMutation = {
  __typename?: "Mutation";
  updateProduct?: {
    __typename?: "Product";
    id: string;
    name?: string | null;
    description?: string | null;
    price?: number | null;
  } | null;
};

export type UpdateUserMutationVariables = Exact<{
  profileId: Scalars["ID"];
  addressId: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
  house?: InputMaybe<Scalars["String"]>;
  state?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  city?: InputMaybe<Scalars["String"]>;
}>;

export type UpdateUserMutation = {
  __typename?: "Mutation";
  updateUser?: { __typename?: "User"; name?: string | null; email?: string | null; id: string } | null;
  updateUserAddress?: {
    __typename?: "UserAddress";
    house?: string | null;
    City?: string | null;
    State?: string | null;
  } | null;
};

export const AddToCartDocument = gql`
  mutation addToCart($id: ID!) {
    addToCart(productId: $id) {
      id
    }
  }
`;
export type AddToCartMutationFn = Apollo.MutationFunction<AddToCartMutation, AddToCartMutationVariables>;

/**
 * __useAddToCartMutation__
 *
 * To run a mutation, you first call `useAddToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToCartMutation, { data, loading, error }] = useAddToCartMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAddToCartMutation(
  baseOptions?: Apollo.MutationHookOptions<AddToCartMutation, AddToCartMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddToCartMutation, AddToCartMutationVariables>(AddToCartDocument, options);
}
export type AddToCartMutationHookResult = ReturnType<typeof useAddToCartMutation>;
export type AddToCartMutationResult = Apollo.MutationResult<AddToCartMutation>;
export type AddToCartMutationOptions = Apollo.BaseMutationOptions<AddToCartMutation, AddToCartMutationVariables>;
export const AllOrdersDocument = gql`
  query allOrders {
    allOrders {
      id
      charge
      total
      user {
        id
      }
      items {
        id
        name
        description
        price
        quantity
        photo {
          altText
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

/**
 * __useAllOrdersQuery__
 *
 * To run a query within a React component, call `useAllOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllOrdersQuery(baseOptions?: Apollo.QueryHookOptions<AllOrdersQuery, AllOrdersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllOrdersQuery, AllOrdersQueryVariables>(AllOrdersDocument, options);
}
export function useAllOrdersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllOrdersQuery, AllOrdersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllOrdersQuery, AllOrdersQueryVariables>(AllOrdersDocument, options);
}
export type AllOrdersQueryHookResult = ReturnType<typeof useAllOrdersQuery>;
export type AllOrdersLazyQueryHookResult = ReturnType<typeof useAllOrdersLazyQuery>;
export type AllOrdersQueryResult = Apollo.QueryResult<AllOrdersQuery, AllOrdersQueryVariables>;
export function refetchAllOrdersQuery(variables?: AllOrdersQueryVariables) {
  return { query: AllOrdersDocument, variables: variables };
}
export const AllProductsDocument = gql`
  query allProducts($skip: Int = 0, $first: Int) {
    allProducts(skip: $skip, first: $first) {
      id
      name
      description
      price
      photo {
        id
        image {
          publicUrlTransformed
        }
        altText
      }
    }
  }
`;

/**
 * __useAllProductsQuery__
 *
 * To run a query within a React component, call `useAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProductsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useAllProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<AllProductsQuery, AllProductsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, options);
}
export function useAllProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllProductsQuery, AllProductsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, options);
}
export type AllProductsQueryHookResult = ReturnType<typeof useAllProductsQuery>;
export type AllProductsLazyQueryHookResult = ReturnType<typeof useAllProductsLazyQuery>;
export type AllProductsQueryResult = Apollo.QueryResult<AllProductsQuery, AllProductsQueryVariables>;
export function refetchAllProductsQuery(variables?: AllProductsQueryVariables) {
  return { query: AllProductsDocument, variables: variables };
}
export const AllProductsCountDocument = gql`
  query allProductsCount {
    _allProductsMeta {
      count
    }
  }
`;

/**
 * __useAllProductsCountQuery__
 *
 * To run a query within a React component, call `useAllProductsCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProductsCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProductsCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllProductsCountQuery(
  baseOptions?: Apollo.QueryHookOptions<AllProductsCountQuery, AllProductsCountQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllProductsCountQuery, AllProductsCountQueryVariables>(AllProductsCountDocument, options);
}
export function useAllProductsCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllProductsCountQuery, AllProductsCountQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllProductsCountQuery, AllProductsCountQueryVariables>(AllProductsCountDocument, options);
}
export type AllProductsCountQueryHookResult = ReturnType<typeof useAllProductsCountQuery>;
export type AllProductsCountLazyQueryHookResult = ReturnType<typeof useAllProductsCountLazyQuery>;
export type AllProductsCountQueryResult = Apollo.QueryResult<AllProductsCountQuery, AllProductsCountQueryVariables>;
export function refetchAllProductsCountQuery(variables?: AllProductsCountQueryVariables) {
  return { query: AllProductsCountDocument, variables: variables };
}
export const CreateOrderDocument = gql`
  mutation createOrder($token: String!) {
    checkout(token: $token) {
      id
      charge
      total
      items {
        id
        name
      }
    }
  }
`;
export type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useCreateOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, options);
}
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const CreateProductDocument = gql`
  mutation createProduct($name: String!, $description: String!, $price: Int!, $image: Upload!) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      name
    }
  }
`;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      price: // value for 'price'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useCreateProductMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
}
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<
  CreateProductMutation,
  CreateProductMutationVariables
>;
export const DeleteCartItemDocument = gql`
  mutation deleteCartItem($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;
export type DeleteCartItemMutationFn = Apollo.MutationFunction<DeleteCartItemMutation, DeleteCartItemMutationVariables>;

/**
 * __useDeleteCartItemMutation__
 *
 * To run a mutation, you first call `useDeleteCartItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCartItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCartItemMutation, { data, loading, error }] = useDeleteCartItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCartItemMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteCartItemMutation, DeleteCartItemMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteCartItemMutation, DeleteCartItemMutationVariables>(DeleteCartItemDocument, options);
}
export type DeleteCartItemMutationHookResult = ReturnType<typeof useDeleteCartItemMutation>;
export type DeleteCartItemMutationResult = Apollo.MutationResult<DeleteCartItemMutation>;
export type DeleteCartItemMutationOptions = Apollo.BaseMutationOptions<
  DeleteCartItemMutation,
  DeleteCartItemMutationVariables
>;
export const DeleteProductDocument = gql`
  mutation deleteProduct($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;
export type DeleteProductMutationFn = Apollo.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProductMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, options);
}
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<
  DeleteProductMutation,
  DeleteProductMutationVariables
>;
export const GetOrderDocument = gql`
  query getOrder($id: ID!) {
    Order(where: { id: $id }) {
      id
      charge
      total
      user {
        id
      }
      items {
        id
        name
        description
        price
        quantity
        photo {
          altText
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

/**
 * __useGetOrderQuery__
 *
 * To run a query within a React component, call `useGetOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrderQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOrderQuery(baseOptions: Apollo.QueryHookOptions<GetOrderQuery, GetOrderQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetOrderQuery, GetOrderQueryVariables>(GetOrderDocument, options);
}
export function useGetOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrderQuery, GetOrderQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetOrderQuery, GetOrderQueryVariables>(GetOrderDocument, options);
}
export type GetOrderQueryHookResult = ReturnType<typeof useGetOrderQuery>;
export type GetOrderLazyQueryHookResult = ReturnType<typeof useGetOrderLazyQuery>;
export type GetOrderQueryResult = Apollo.QueryResult<GetOrderQuery, GetOrderQueryVariables>;
export function refetchGetOrderQuery(variables: GetOrderQueryVariables) {
  return { query: GetOrderDocument, variables: variables };
}
export const ProductDocument = gql`
  query Product($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      description
      user {
        id
      }
      photo {
        image {
          publicUrlTransformed
        }
        altText
      }
      price
    }
  }
`;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductQuery(baseOptions: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
}
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
}
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
export function refetchProductQuery(variables: ProductQueryVariables) {
  return { query: ProductDocument, variables: variables };
}
export const UserDocument = gql`
  query User {
    authenticatedItem {
      ... on User {
        id
        name
        email
        address {
          id
          house
          City
          State
        }
        products {
          id
          name
          price
          photo {
            image {
              publicUrlTransformed
            }
          }
        }
        cart {
          id
          quantity
          product {
            id
            name
            description
            price
            photo {
              image {
                publicUrlTransformed
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export function refetchUserQuery(variables?: UserQueryVariables) {
  return { query: UserDocument, variables: variables };
}
export const RequestResetDocument = gql`
  mutation requestReset($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
      message
    }
  }
`;
export type RequestResetMutationFn = Apollo.MutationFunction<RequestResetMutation, RequestResetMutationVariables>;

/**
 * __useRequestResetMutation__
 *
 * To run a mutation, you first call `useRequestResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestResetMutation, { data, loading, error }] = useRequestResetMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRequestResetMutation(
  baseOptions?: Apollo.MutationHookOptions<RequestResetMutation, RequestResetMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RequestResetMutation, RequestResetMutationVariables>(RequestResetDocument, options);
}
export type RequestResetMutationHookResult = ReturnType<typeof useRequestResetMutation>;
export type RequestResetMutationResult = Apollo.MutationResult<RequestResetMutation>;
export type RequestResetMutationOptions = Apollo.BaseMutationOptions<
  RequestResetMutation,
  RequestResetMutationVariables
>;
export const RedeemPasswordResetDocument = gql`
  mutation redeemPasswordReset($email: String!, $password: String!, $token: String!) {
    redeemUserPasswordResetToken(email: $email, password: $password, token: $token) {
      code
      message
    }
  }
`;
export type RedeemPasswordResetMutationFn = Apollo.MutationFunction<
  RedeemPasswordResetMutation,
  RedeemPasswordResetMutationVariables
>;

/**
 * __useRedeemPasswordResetMutation__
 *
 * To run a mutation, you first call `useRedeemPasswordResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRedeemPasswordResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [redeemPasswordResetMutation, { data, loading, error }] = useRedeemPasswordResetMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useRedeemPasswordResetMutation(
  baseOptions?: Apollo.MutationHookOptions<RedeemPasswordResetMutation, RedeemPasswordResetMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RedeemPasswordResetMutation, RedeemPasswordResetMutationVariables>(
    RedeemPasswordResetDocument,
    options,
  );
}
export type RedeemPasswordResetMutationHookResult = ReturnType<typeof useRedeemPasswordResetMutation>;
export type RedeemPasswordResetMutationResult = Apollo.MutationResult<RedeemPasswordResetMutation>;
export type RedeemPasswordResetMutationOptions = Apollo.BaseMutationOptions<
  RedeemPasswordResetMutation,
  RedeemPasswordResetMutationVariables
>;
export const SearchProductsDocument = gql`
  query searchProducts($searchTerm: String!) {
    searchTerms: allProducts(
      where: { OR: [{ name_contains_i: $searchTerm }, { description_contains_i: $searchTerm }] }
    ) {
      id
      name
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

/**
 * __useSearchProductsQuery__
 *
 * To run a query within a React component, call `useSearchProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchProductsQuery({
 *   variables: {
 *      searchTerm: // value for 'searchTerm'
 *   },
 * });
 */
export function useSearchProductsQuery(
  baseOptions: Apollo.QueryHookOptions<SearchProductsQuery, SearchProductsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SearchProductsQuery, SearchProductsQueryVariables>(SearchProductsDocument, options);
}
export function useSearchProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SearchProductsQuery, SearchProductsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SearchProductsQuery, SearchProductsQueryVariables>(SearchProductsDocument, options);
}
export type SearchProductsQueryHookResult = ReturnType<typeof useSearchProductsQuery>;
export type SearchProductsLazyQueryHookResult = ReturnType<typeof useSearchProductsLazyQuery>;
export type SearchProductsQueryResult = Apollo.QueryResult<SearchProductsQuery, SearchProductsQueryVariables>;
export function refetchSearchProductsQuery(variables: SearchProductsQueryVariables) {
  return { query: SearchProductsDocument, variables: variables };
}
export const SignInDocument = gql`
  mutation signIn($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
}
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const SignOutDocument = gql`
  mutation signOut {
    endSession
  }
`;
export type SignOutMutationFn = Apollo.MutationFunction<SignOutMutation, SignOutMutationVariables>;

/**
 * __useSignOutMutation__
 *
 * To run a mutation, you first call `useSignOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signOutMutation, { data, loading, error }] = useSignOutMutation({
 *   variables: {
 *   },
 * });
 */
export function useSignOutMutation(
  baseOptions?: Apollo.MutationHookOptions<SignOutMutation, SignOutMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignOutMutation, SignOutMutationVariables>(SignOutDocument, options);
}
export type SignOutMutationHookResult = ReturnType<typeof useSignOutMutation>;
export type SignOutMutationResult = Apollo.MutationResult<SignOutMutation>;
export type SignOutMutationOptions = Apollo.BaseMutationOptions<SignOutMutation, SignOutMutationVariables>;
export const SignUpDocument = gql`
  mutation signUp($name: String!, $email: String!, $password: String!) {
    createUser(
      data: {
        name: $name
        email: $email
        password: $password
        address: {
          create: { house: "Enter your Complete Address", City: "Enter your City", State: "Enter your State" }
        }
      }
    ) {
      id
      email
      name
      address {
        id
        house
        City
        State
      }
    }
  }
`;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
}
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const UpdateProductDocument = gql`
  mutation updateProduct($id: ID!, $name: String, $description: String, $price: Int) {
    updateProduct(id: $id, data: { name: $name, description: $description, price: $price }) {
      id
      name
      description
      price
    }
  }
`;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      price: // value for 'price'
 *   },
 * });
 */
export function useUpdateProductMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, options);
}
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<
  UpdateProductMutation,
  UpdateProductMutationVariables
>;
export const UpdateUserDocument = gql`
  mutation updateUser(
    $profileId: ID!
    $addressId: ID!
    $name: String
    $house: String
    $state: String
    $email: String
    $city: String
  ) {
    updateUser(id: $profileId, data: { name: $name, email: $email }) {
      name
      email
      id
    }
    updateUserAddress(id: $addressId, data: { house: $house, City: $city, State: $state }) {
      house
      City
      State
    }
  }
`;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      profileId: // value for 'profileId'
 *      addressId: // value for 'addressId'
 *      name: // value for 'name'
 *      house: // value for 'house'
 *      state: // value for 'state'
 *      email: // value for 'email'
 *      city: // value for 'city'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
}
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export type CartItemKeySpecifier = ("id" | "product" | "quantity" | "user" | CartItemKeySpecifier)[];
export type CartItemFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  product?: FieldPolicy<any> | FieldReadFunction<any>;
  quantity?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CloudinaryImage_FileKeySpecifier = (
  | "encoding"
  | "filename"
  | "id"
  | "mimetype"
  | "originalFilename"
  | "path"
  | "publicUrl"
  | "publicUrlTransformed"
  | CloudinaryImage_FileKeySpecifier
)[];
export type CloudinaryImage_FileFieldPolicy = {
  encoding?: FieldPolicy<any> | FieldReadFunction<any>;
  filename?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  mimetype?: FieldPolicy<any> | FieldReadFunction<any>;
  originalFilename?: FieldPolicy<any> | FieldReadFunction<any>;
  path?: FieldPolicy<any> | FieldReadFunction<any>;
  publicUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  publicUrlTransformed?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminMetaKeySpecifier = (
  | "enableSessionItem"
  | "enableSignout"
  | "list"
  | "lists"
  | KeystoneAdminMetaKeySpecifier
)[];
export type KeystoneAdminMetaFieldPolicy = {
  enableSessionItem?: FieldPolicy<any> | FieldReadFunction<any>;
  enableSignout?: FieldPolicy<any> | FieldReadFunction<any>;
  list?: FieldPolicy<any> | FieldReadFunction<any>;
  lists?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUIFieldMetaKeySpecifier = (
  | "createView"
  | "customViewsHash"
  | "fieldMeta"
  | "isOrderable"
  | "itemView"
  | "label"
  | "listView"
  | "path"
  | "viewsHash"
  | KeystoneAdminUIFieldMetaKeySpecifier
)[];
export type KeystoneAdminUIFieldMetaFieldPolicy = {
  createView?: FieldPolicy<any> | FieldReadFunction<any>;
  customViewsHash?: FieldPolicy<any> | FieldReadFunction<any>;
  fieldMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  isOrderable?: FieldPolicy<any> | FieldReadFunction<any>;
  itemView?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  listView?: FieldPolicy<any> | FieldReadFunction<any>;
  path?: FieldPolicy<any> | FieldReadFunction<any>;
  viewsHash?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUIFieldMetaCreateViewKeySpecifier = (
  | "fieldMode"
  | KeystoneAdminUIFieldMetaCreateViewKeySpecifier
)[];
export type KeystoneAdminUIFieldMetaCreateViewFieldPolicy = {
  fieldMode?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUIFieldMetaItemViewKeySpecifier = (
  | "fieldMode"
  | KeystoneAdminUIFieldMetaItemViewKeySpecifier
)[];
export type KeystoneAdminUIFieldMetaItemViewFieldPolicy = {
  fieldMode?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUIFieldMetaListViewKeySpecifier = (
  | "fieldMode"
  | KeystoneAdminUIFieldMetaListViewKeySpecifier
)[];
export type KeystoneAdminUIFieldMetaListViewFieldPolicy = {
  fieldMode?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUIListMetaKeySpecifier = (
  | "description"
  | "fields"
  | "hideCreate"
  | "hideDelete"
  | "initialColumns"
  | "initialSort"
  | "isHidden"
  | "itemQueryName"
  | "key"
  | "label"
  | "labelField"
  | "listQueryName"
  | "pageSize"
  | "path"
  | "plural"
  | "singular"
  | KeystoneAdminUIListMetaKeySpecifier
)[];
export type KeystoneAdminUIListMetaFieldPolicy = {
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  fields?: FieldPolicy<any> | FieldReadFunction<any>;
  hideCreate?: FieldPolicy<any> | FieldReadFunction<any>;
  hideDelete?: FieldPolicy<any> | FieldReadFunction<any>;
  initialColumns?: FieldPolicy<any> | FieldReadFunction<any>;
  initialSort?: FieldPolicy<any> | FieldReadFunction<any>;
  isHidden?: FieldPolicy<any> | FieldReadFunction<any>;
  itemQueryName?: FieldPolicy<any> | FieldReadFunction<any>;
  key?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelField?: FieldPolicy<any> | FieldReadFunction<any>;
  listQueryName?: FieldPolicy<any> | FieldReadFunction<any>;
  pageSize?: FieldPolicy<any> | FieldReadFunction<any>;
  path?: FieldPolicy<any> | FieldReadFunction<any>;
  plural?: FieldPolicy<any> | FieldReadFunction<any>;
  singular?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUISortKeySpecifier = ("direction" | "field" | KeystoneAdminUISortKeySpecifier)[];
export type KeystoneAdminUISortFieldPolicy = {
  direction?: FieldPolicy<any> | FieldReadFunction<any>;
  field?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneMetaKeySpecifier = ("adminMeta" | KeystoneMetaKeySpecifier)[];
export type KeystoneMetaFieldPolicy = {
  adminMeta?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MutationKeySpecifier = (
  | "addToCart"
  | "authenticateUserWithPassword"
  | "checkout"
  | "createCartItem"
  | "createCartItems"
  | "createInitialUser"
  | "createOrder"
  | "createOrderItem"
  | "createOrderItems"
  | "createOrders"
  | "createProduct"
  | "createProductImage"
  | "createProductImages"
  | "createProducts"
  | "createRole"
  | "createRoles"
  | "createUser"
  | "createUserAddress"
  | "createUserAddresses"
  | "createUsers"
  | "deleteCartItem"
  | "deleteCartItems"
  | "deleteOrder"
  | "deleteOrderItem"
  | "deleteOrderItems"
  | "deleteOrders"
  | "deleteProduct"
  | "deleteProductImage"
  | "deleteProductImages"
  | "deleteProducts"
  | "deleteRole"
  | "deleteRoles"
  | "deleteUser"
  | "deleteUserAddress"
  | "deleteUserAddresses"
  | "deleteUsers"
  | "endSession"
  | "redeemUserPasswordResetToken"
  | "sendUserPasswordResetLink"
  | "updateCartItem"
  | "updateCartItems"
  | "updateOrder"
  | "updateOrderItem"
  | "updateOrderItems"
  | "updateOrders"
  | "updateProduct"
  | "updateProductImage"
  | "updateProductImages"
  | "updateProducts"
  | "updateRole"
  | "updateRoles"
  | "updateUser"
  | "updateUserAddress"
  | "updateUserAddresses"
  | "updateUsers"
  | MutationKeySpecifier
)[];
export type MutationFieldPolicy = {
  addToCart?: FieldPolicy<any> | FieldReadFunction<any>;
  authenticateUserWithPassword?: FieldPolicy<any> | FieldReadFunction<any>;
  checkout?: FieldPolicy<any> | FieldReadFunction<any>;
  createCartItem?: FieldPolicy<any> | FieldReadFunction<any>;
  createCartItems?: FieldPolicy<any> | FieldReadFunction<any>;
  createInitialUser?: FieldPolicy<any> | FieldReadFunction<any>;
  createOrder?: FieldPolicy<any> | FieldReadFunction<any>;
  createOrderItem?: FieldPolicy<any> | FieldReadFunction<any>;
  createOrderItems?: FieldPolicy<any> | FieldReadFunction<any>;
  createOrders?: FieldPolicy<any> | FieldReadFunction<any>;
  createProduct?: FieldPolicy<any> | FieldReadFunction<any>;
  createProductImage?: FieldPolicy<any> | FieldReadFunction<any>;
  createProductImages?: FieldPolicy<any> | FieldReadFunction<any>;
  createProducts?: FieldPolicy<any> | FieldReadFunction<any>;
  createRole?: FieldPolicy<any> | FieldReadFunction<any>;
  createRoles?: FieldPolicy<any> | FieldReadFunction<any>;
  createUser?: FieldPolicy<any> | FieldReadFunction<any>;
  createUserAddress?: FieldPolicy<any> | FieldReadFunction<any>;
  createUserAddresses?: FieldPolicy<any> | FieldReadFunction<any>;
  createUsers?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteCartItem?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteCartItems?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteOrder?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteOrderItem?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteOrderItems?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteOrders?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteProduct?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteProductImage?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteProductImages?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteProducts?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteRole?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteRoles?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteUser?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteUserAddress?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteUserAddresses?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteUsers?: FieldPolicy<any> | FieldReadFunction<any>;
  endSession?: FieldPolicy<any> | FieldReadFunction<any>;
  redeemUserPasswordResetToken?: FieldPolicy<any> | FieldReadFunction<any>;
  sendUserPasswordResetLink?: FieldPolicy<any> | FieldReadFunction<any>;
  updateCartItem?: FieldPolicy<any> | FieldReadFunction<any>;
  updateCartItems?: FieldPolicy<any> | FieldReadFunction<any>;
  updateOrder?: FieldPolicy<any> | FieldReadFunction<any>;
  updateOrderItem?: FieldPolicy<any> | FieldReadFunction<any>;
  updateOrderItems?: FieldPolicy<any> | FieldReadFunction<any>;
  updateOrders?: FieldPolicy<any> | FieldReadFunction<any>;
  updateProduct?: FieldPolicy<any> | FieldReadFunction<any>;
  updateProductImage?: FieldPolicy<any> | FieldReadFunction<any>;
  updateProductImages?: FieldPolicy<any> | FieldReadFunction<any>;
  updateProducts?: FieldPolicy<any> | FieldReadFunction<any>;
  updateRole?: FieldPolicy<any> | FieldReadFunction<any>;
  updateRoles?: FieldPolicy<any> | FieldReadFunction<any>;
  updateUser?: FieldPolicy<any> | FieldReadFunction<any>;
  updateUserAddress?: FieldPolicy<any> | FieldReadFunction<any>;
  updateUserAddresses?: FieldPolicy<any> | FieldReadFunction<any>;
  updateUsers?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type OrderKeySpecifier = (
  | "_itemsMeta"
  | "charge"
  | "id"
  | "items"
  | "label"
  | "total"
  | "user"
  | OrderKeySpecifier
)[];
export type OrderFieldPolicy = {
  _itemsMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  charge?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  items?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  total?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type OrderItemKeySpecifier = (
  | "description"
  | "id"
  | "name"
  | "order"
  | "photo"
  | "price"
  | "quantity"
  | OrderItemKeySpecifier
)[];
export type OrderItemFieldPolicy = {
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  order?: FieldPolicy<any> | FieldReadFunction<any>;
  photo?: FieldPolicy<any> | FieldReadFunction<any>;
  price?: FieldPolicy<any> | FieldReadFunction<any>;
  quantity?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ProductKeySpecifier = (
  | "description"
  | "id"
  | "name"
  | "photo"
  | "price"
  | "status"
  | "user"
  | ProductKeySpecifier
)[];
export type ProductFieldPolicy = {
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  photo?: FieldPolicy<any> | FieldReadFunction<any>;
  price?: FieldPolicy<any> | FieldReadFunction<any>;
  status?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ProductImageKeySpecifier = ("altText" | "id" | "image" | "product" | ProductImageKeySpecifier)[];
export type ProductImageFieldPolicy = {
  altText?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  image?: FieldPolicy<any> | FieldReadFunction<any>;
  product?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = (
  | "CartItem"
  | "Order"
  | "OrderItem"
  | "Product"
  | "ProductImage"
  | "Role"
  | "User"
  | "UserAddress"
  | "_CartItemsMeta"
  | "_OrderItemsMeta"
  | "_OrdersMeta"
  | "_ProductImagesMeta"
  | "_ProductsMeta"
  | "_RolesMeta"
  | "_UserAddressesMeta"
  | "_UsersMeta"
  | "_allCartItemsMeta"
  | "_allOrderItemsMeta"
  | "_allOrdersMeta"
  | "_allProductImagesMeta"
  | "_allProductsMeta"
  | "_allRolesMeta"
  | "_allUserAddressesMeta"
  | "_allUsersMeta"
  | "_ksListsMeta"
  | "allCartItems"
  | "allOrderItems"
  | "allOrders"
  | "allProductImages"
  | "allProducts"
  | "allRoles"
  | "allUserAddresses"
  | "allUsers"
  | "appVersion"
  | "authenticatedItem"
  | "keystone"
  | "validateUserPasswordResetToken"
  | QueryKeySpecifier
)[];
export type QueryFieldPolicy = {
  CartItem?: FieldPolicy<any> | FieldReadFunction<any>;
  Order?: FieldPolicy<any> | FieldReadFunction<any>;
  OrderItem?: FieldPolicy<any> | FieldReadFunction<any>;
  Product?: FieldPolicy<any> | FieldReadFunction<any>;
  ProductImage?: FieldPolicy<any> | FieldReadFunction<any>;
  Role?: FieldPolicy<any> | FieldReadFunction<any>;
  User?: FieldPolicy<any> | FieldReadFunction<any>;
  UserAddress?: FieldPolicy<any> | FieldReadFunction<any>;
  _CartItemsMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _OrderItemsMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _OrdersMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _ProductImagesMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _ProductsMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _RolesMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _UserAddressesMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _UsersMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _allCartItemsMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _allOrderItemsMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _allOrdersMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _allProductImagesMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _allProductsMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _allRolesMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _allUserAddressesMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _allUsersMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _ksListsMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  allCartItems?: FieldPolicy<any> | FieldReadFunction<any>;
  allOrderItems?: FieldPolicy<any> | FieldReadFunction<any>;
  allOrders?: FieldPolicy<any> | FieldReadFunction<any>;
  allProductImages?: FieldPolicy<any> | FieldReadFunction<any>;
  allProducts?: FieldPolicy<any> | FieldReadFunction<any>;
  allRoles?: FieldPolicy<any> | FieldReadFunction<any>;
  allUserAddresses?: FieldPolicy<any> | FieldReadFunction<any>;
  allUsers?: FieldPolicy<any> | FieldReadFunction<any>;
  appVersion?: FieldPolicy<any> | FieldReadFunction<any>;
  authenticatedItem?: FieldPolicy<any> | FieldReadFunction<any>;
  keystone?: FieldPolicy<any> | FieldReadFunction<any>;
  validateUserPasswordResetToken?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RedeemUserPasswordResetTokenResultKeySpecifier = (
  | "code"
  | "message"
  | RedeemUserPasswordResetTokenResultKeySpecifier
)[];
export type RedeemUserPasswordResetTokenResultFieldPolicy = {
  code?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RoleKeySpecifier = (
  | "_assignedToMeta"
  | "assignedTo"
  | "canManageCart"
  | "canManageOrders"
  | "canManageProducts"
  | "canManageRoles"
  | "canManageUsers"
  | "canSeeOtherUsers"
  | "id"
  | "name"
  | RoleKeySpecifier
)[];
export type RoleFieldPolicy = {
  _assignedToMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  assignedTo?: FieldPolicy<any> | FieldReadFunction<any>;
  canManageCart?: FieldPolicy<any> | FieldReadFunction<any>;
  canManageOrders?: FieldPolicy<any> | FieldReadFunction<any>;
  canManageProducts?: FieldPolicy<any> | FieldReadFunction<any>;
  canManageRoles?: FieldPolicy<any> | FieldReadFunction<any>;
  canManageUsers?: FieldPolicy<any> | FieldReadFunction<any>;
  canSeeOtherUsers?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SendUserPasswordResetLinkResultKeySpecifier = (
  | "code"
  | "message"
  | SendUserPasswordResetLinkResultKeySpecifier
)[];
export type SendUserPasswordResetLinkResultFieldPolicy = {
  code?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserKeySpecifier = (
  | "_cartMeta"
  | "_ordersMeta"
  | "_productsMeta"
  | "address"
  | "cart"
  | "email"
  | "id"
  | "magicAuthIssuedAt"
  | "magicAuthRedeemedAt"
  | "magicAuthToken_is_set"
  | "name"
  | "orders"
  | "passwordResetIssuedAt"
  | "passwordResetRedeemedAt"
  | "passwordResetToken_is_set"
  | "password_is_set"
  | "products"
  | "role"
  | UserKeySpecifier
)[];
export type UserFieldPolicy = {
  _cartMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _ordersMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _productsMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  address?: FieldPolicy<any> | FieldReadFunction<any>;
  cart?: FieldPolicy<any> | FieldReadFunction<any>;
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  magicAuthIssuedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  magicAuthRedeemedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  magicAuthToken_is_set?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  orders?: FieldPolicy<any> | FieldReadFunction<any>;
  passwordResetIssuedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  passwordResetRedeemedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  passwordResetToken_is_set?: FieldPolicy<any> | FieldReadFunction<any>;
  password_is_set?: FieldPolicy<any> | FieldReadFunction<any>;
  products?: FieldPolicy<any> | FieldReadFunction<any>;
  role?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserAddressKeySpecifier = ("City" | "State" | "house" | "id" | "user" | UserAddressKeySpecifier)[];
export type UserAddressFieldPolicy = {
  City?: FieldPolicy<any> | FieldReadFunction<any>;
  State?: FieldPolicy<any> | FieldReadFunction<any>;
  house?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserAuthenticationWithPasswordFailureKeySpecifier = (
  | "code"
  | "message"
  | UserAuthenticationWithPasswordFailureKeySpecifier
)[];
export type UserAuthenticationWithPasswordFailureFieldPolicy = {
  code?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserAuthenticationWithPasswordSuccessKeySpecifier = (
  | "item"
  | "sessionToken"
  | UserAuthenticationWithPasswordSuccessKeySpecifier
)[];
export type UserAuthenticationWithPasswordSuccessFieldPolicy = {
  item?: FieldPolicy<any> | FieldReadFunction<any>;
  sessionToken?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ValidateUserPasswordResetTokenResultKeySpecifier = (
  | "code"
  | "message"
  | ValidateUserPasswordResetTokenResultKeySpecifier
)[];
export type ValidateUserPasswordResetTokenResultFieldPolicy = {
  code?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListAccessKeySpecifier = ("auth" | "create" | "delete" | "read" | "update" | _ListAccessKeySpecifier)[];
export type _ListAccessFieldPolicy = {
  auth?: FieldPolicy<any> | FieldReadFunction<any>;
  create?: FieldPolicy<any> | FieldReadFunction<any>;
  delete?: FieldPolicy<any> | FieldReadFunction<any>;
  read?: FieldPolicy<any> | FieldReadFunction<any>;
  update?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListInputTypesKeySpecifier = (
  | "createInput"
  | "createManyInput"
  | "updateInput"
  | "updateManyInput"
  | "whereInput"
  | "whereUniqueInput"
  | _ListInputTypesKeySpecifier
)[];
export type _ListInputTypesFieldPolicy = {
  createInput?: FieldPolicy<any> | FieldReadFunction<any>;
  createManyInput?: FieldPolicy<any> | FieldReadFunction<any>;
  updateInput?: FieldPolicy<any> | FieldReadFunction<any>;
  updateManyInput?: FieldPolicy<any> | FieldReadFunction<any>;
  whereInput?: FieldPolicy<any> | FieldReadFunction<any>;
  whereUniqueInput?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListMetaKeySpecifier = (
  | "access"
  | "description"
  | "key"
  | "label"
  | "name"
  | "path"
  | "plural"
  | "schema"
  | "singular"
  | _ListMetaKeySpecifier
)[];
export type _ListMetaFieldPolicy = {
  access?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  key?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  path?: FieldPolicy<any> | FieldReadFunction<any>;
  plural?: FieldPolicy<any> | FieldReadFunction<any>;
  schema?: FieldPolicy<any> | FieldReadFunction<any>;
  singular?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListMutationsKeySpecifier = (
  | "create"
  | "createMany"
  | "delete"
  | "deleteMany"
  | "update"
  | "updateMany"
  | _ListMutationsKeySpecifier
)[];
export type _ListMutationsFieldPolicy = {
  create?: FieldPolicy<any> | FieldReadFunction<any>;
  createMany?: FieldPolicy<any> | FieldReadFunction<any>;
  delete?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteMany?: FieldPolicy<any> | FieldReadFunction<any>;
  update?: FieldPolicy<any> | FieldReadFunction<any>;
  updateMany?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListQueriesKeySpecifier = ("item" | "list" | "meta" | _ListQueriesKeySpecifier)[];
export type _ListQueriesFieldPolicy = {
  item?: FieldPolicy<any> | FieldReadFunction<any>;
  list?: FieldPolicy<any> | FieldReadFunction<any>;
  meta?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListSchemaKeySpecifier = (
  | "fields"
  | "inputTypes"
  | "mutations"
  | "queries"
  | "relatedFields"
  | "type"
  | _ListSchemaKeySpecifier
)[];
export type _ListSchemaFieldPolicy = {
  fields?: FieldPolicy<any> | FieldReadFunction<any>;
  inputTypes?: FieldPolicy<any> | FieldReadFunction<any>;
  mutations?: FieldPolicy<any> | FieldReadFunction<any>;
  queries?: FieldPolicy<any> | FieldReadFunction<any>;
  relatedFields?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListSchemaFieldsKeySpecifier = ("name" | "path" | "type" | _ListSchemaFieldsKeySpecifier)[];
export type _ListSchemaFieldsFieldPolicy = {
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  path?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListSchemaRelatedFieldsKeySpecifier = ("fields" | "type" | _ListSchemaRelatedFieldsKeySpecifier)[];
export type _ListSchemaRelatedFieldsFieldPolicy = {
  fields?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _QueryMetaKeySpecifier = ("count" | _QueryMetaKeySpecifier)[];
export type _QueryMetaFieldPolicy = {
  count?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StrictTypedTypePolicies = {
  CartItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | CartItemKeySpecifier | (() => undefined | CartItemKeySpecifier);
    fields?: CartItemFieldPolicy;
  };
  CloudinaryImage_File?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | CloudinaryImage_FileKeySpecifier | (() => undefined | CloudinaryImage_FileKeySpecifier);
    fields?: CloudinaryImage_FileFieldPolicy;
  };
  KeystoneAdminMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | KeystoneAdminMetaKeySpecifier | (() => undefined | KeystoneAdminMetaKeySpecifier);
    fields?: KeystoneAdminMetaFieldPolicy;
  };
  KeystoneAdminUIFieldMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | KeystoneAdminUIFieldMetaKeySpecifier | (() => undefined | KeystoneAdminUIFieldMetaKeySpecifier);
    fields?: KeystoneAdminUIFieldMetaFieldPolicy;
  };
  KeystoneAdminUIFieldMetaCreateView?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | KeystoneAdminUIFieldMetaCreateViewKeySpecifier
      | (() => undefined | KeystoneAdminUIFieldMetaCreateViewKeySpecifier);
    fields?: KeystoneAdminUIFieldMetaCreateViewFieldPolicy;
  };
  KeystoneAdminUIFieldMetaItemView?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | KeystoneAdminUIFieldMetaItemViewKeySpecifier
      | (() => undefined | KeystoneAdminUIFieldMetaItemViewKeySpecifier);
    fields?: KeystoneAdminUIFieldMetaItemViewFieldPolicy;
  };
  KeystoneAdminUIFieldMetaListView?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | KeystoneAdminUIFieldMetaListViewKeySpecifier
      | (() => undefined | KeystoneAdminUIFieldMetaListViewKeySpecifier);
    fields?: KeystoneAdminUIFieldMetaListViewFieldPolicy;
  };
  KeystoneAdminUIListMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | KeystoneAdminUIListMetaKeySpecifier | (() => undefined | KeystoneAdminUIListMetaKeySpecifier);
    fields?: KeystoneAdminUIListMetaFieldPolicy;
  };
  KeystoneAdminUISort?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | KeystoneAdminUISortKeySpecifier | (() => undefined | KeystoneAdminUISortKeySpecifier);
    fields?: KeystoneAdminUISortFieldPolicy;
  };
  KeystoneMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | KeystoneMetaKeySpecifier | (() => undefined | KeystoneMetaKeySpecifier);
    fields?: KeystoneMetaFieldPolicy;
  };
  Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier);
    fields?: MutationFieldPolicy;
  };
  Order?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | OrderKeySpecifier | (() => undefined | OrderKeySpecifier);
    fields?: OrderFieldPolicy;
  };
  OrderItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | OrderItemKeySpecifier | (() => undefined | OrderItemKeySpecifier);
    fields?: OrderItemFieldPolicy;
  };
  Product?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | ProductKeySpecifier | (() => undefined | ProductKeySpecifier);
    fields?: ProductFieldPolicy;
  };
  ProductImage?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | ProductImageKeySpecifier | (() => undefined | ProductImageKeySpecifier);
    fields?: ProductImageFieldPolicy;
  };
  Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier);
    fields?: QueryFieldPolicy;
  };
  RedeemUserPasswordResetTokenResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RedeemUserPasswordResetTokenResultKeySpecifier
      | (() => undefined | RedeemUserPasswordResetTokenResultKeySpecifier);
    fields?: RedeemUserPasswordResetTokenResultFieldPolicy;
  };
  Role?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | RoleKeySpecifier | (() => undefined | RoleKeySpecifier);
    fields?: RoleFieldPolicy;
  };
  SendUserPasswordResetLinkResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SendUserPasswordResetLinkResultKeySpecifier
      | (() => undefined | SendUserPasswordResetLinkResultKeySpecifier);
    fields?: SendUserPasswordResetLinkResultFieldPolicy;
  };
  User?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier);
    fields?: UserFieldPolicy;
  };
  UserAddress?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | UserAddressKeySpecifier | (() => undefined | UserAddressKeySpecifier);
    fields?: UserAddressFieldPolicy;
  };
  UserAuthenticationWithPasswordFailure?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UserAuthenticationWithPasswordFailureKeySpecifier
      | (() => undefined | UserAuthenticationWithPasswordFailureKeySpecifier);
    fields?: UserAuthenticationWithPasswordFailureFieldPolicy;
  };
  UserAuthenticationWithPasswordSuccess?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UserAuthenticationWithPasswordSuccessKeySpecifier
      | (() => undefined | UserAuthenticationWithPasswordSuccessKeySpecifier);
    fields?: UserAuthenticationWithPasswordSuccessFieldPolicy;
  };
  ValidateUserPasswordResetTokenResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | ValidateUserPasswordResetTokenResultKeySpecifier
      | (() => undefined | ValidateUserPasswordResetTokenResultKeySpecifier);
    fields?: ValidateUserPasswordResetTokenResultFieldPolicy;
  };
  _ListAccess?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | _ListAccessKeySpecifier | (() => undefined | _ListAccessKeySpecifier);
    fields?: _ListAccessFieldPolicy;
  };
  _ListInputTypes?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | _ListInputTypesKeySpecifier | (() => undefined | _ListInputTypesKeySpecifier);
    fields?: _ListInputTypesFieldPolicy;
  };
  _ListMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | _ListMetaKeySpecifier | (() => undefined | _ListMetaKeySpecifier);
    fields?: _ListMetaFieldPolicy;
  };
  _ListMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | _ListMutationsKeySpecifier | (() => undefined | _ListMutationsKeySpecifier);
    fields?: _ListMutationsFieldPolicy;
  };
  _ListQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | _ListQueriesKeySpecifier | (() => undefined | _ListQueriesKeySpecifier);
    fields?: _ListQueriesFieldPolicy;
  };
  _ListSchema?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | _ListSchemaKeySpecifier | (() => undefined | _ListSchemaKeySpecifier);
    fields?: _ListSchemaFieldPolicy;
  };
  _ListSchemaFields?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | _ListSchemaFieldsKeySpecifier | (() => undefined | _ListSchemaFieldsKeySpecifier);
    fields?: _ListSchemaFieldsFieldPolicy;
  };
  _ListSchemaRelatedFields?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | _ListSchemaRelatedFieldsKeySpecifier | (() => undefined | _ListSchemaRelatedFieldsKeySpecifier);
    fields?: _ListSchemaRelatedFieldsFieldPolicy;
  };
  _QueryMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | _QueryMetaKeySpecifier | (() => undefined | _QueryMetaKeySpecifier);
    fields?: _QueryMetaFieldPolicy;
  };
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
