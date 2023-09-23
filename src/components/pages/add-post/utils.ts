import { Tag } from "../../../types/types";

const MIN_TAG_LENGTH = 3;
const MAX_TAG_LENGTH = 10;

export const isValidTag = (tag: string, tags: Tag[]) => {
  return (
    tag.length >= MIN_TAG_LENGTH &&
    tag.length <= MAX_TAG_LENGTH &&
    !isDupicateTag(tag, tags)
  );
};

export const isDupicateTag = (tag: string, tags: Tag[]) => {
  return tags.some((t) => t.name === tag);
}
