import { Tag } from "../../../types/types";

const MIN_TAG_LENGTH = 3;
const MIN_BODY_LENGTH = 10;
const MAX_TAG_LENGTH = 15;

// export const isValidTag = (tag: string, tags: Tag[]) => {
export const isValidTag = (tag: string, tags: string[]) => {
  return (
    tag.length >= MIN_TAG_LENGTH &&
    tag.length <= MAX_TAG_LENGTH &&
    !isDupicateTag(tag, tags)
  );
};

export const isDupicateTag = (tag: string, tags: string[]) => {
  return tags.some((t) => t === tag);
}

export const isValidPost = (postBody : string) => {
  return postBody.length > MIN_BODY_LENGTH;
}

