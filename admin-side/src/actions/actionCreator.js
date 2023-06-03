import { userlogin } from "./creators/userLogin";
import { categoriesGet } from "./creators/categoriesGet";
import { itemsGet } from "./creators/itemsGet";
import { itemsPost } from "./creators/itemsPost";
import itemsDelete from "./creators/itemsDelete";
import { itemsEdit } from "./creators/itemsUpdate";
import { categoriesPost } from "./creators/categoriesPost";
import { userPost } from "./creators/userPost";
import { itemsDetail } from "./creators/itemsDetail";
import { userGet } from "./creators/userGet";
import { categoryDelete } from "./creators/CategoryDelete";
import { categoryDetail } from "./creators/categoriesDetail";
import { categoryEdit } from "./creators/categoriesEdit";

export const actionUserlogin = userlogin
export const actionUserGet = userGet
export const actionCategoriesGet = categoriesGet
export const actionCatgeoryDelete = categoryDelete
export const actionItemGet = itemsGet
export const actionItemPost = itemsPost
export const actionItemDelete = itemsDelete
export const actionItemEdit = itemsEdit
export const actionCategoriesPost = categoriesPost
export const actionUserPost = userPost
export const actionItemsDetail = itemsDetail
export const actionCategoryDetail = categoryDetail
export const actionCategoryEdit = categoryEdit