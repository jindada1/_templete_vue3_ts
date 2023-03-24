import { isDevMode } from "@/utils/env";

/** UI 上的常量*/
export const UNKNOWN_ERROR_MSG = '未知错误，请重试';

/** 设置 */
export const REQUEST_BASE_URL = isDevMode() ? '/dev/': '/';
