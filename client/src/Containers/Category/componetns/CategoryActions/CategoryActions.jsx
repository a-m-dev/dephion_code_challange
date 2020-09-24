import React, { useCallback, useMemo } from "react";
import { ActionsWrapper } from "./styles";
import { toast } from "react-toastify";
import { useGlobalAppContext } from "Containers/App/context";
import { useCategoryContext } from "Containers/Category/context";

const CategoryActions = () => {
  const {
    data: { categoryId },
    actions: { followCategory },
  } = useCategoryContext();

  const {
    data: { isLoggedIn, userData },
  } = useGlobalAppContext();

  const handleFollowCategory = useCallback(() => {
    if (isLoggedIn) {
      followCategory({ categoryId: String(categoryId) });
    } else {
      toast.error("You are not logged in!");
    }
  }, [isLoggedIn]);

  const isCategoryFollowedByUser = useMemo(() => {
    if (isLoggedIn) {
      return userData?.followingCategories?.includes(String(categoryId));
    }
  }, [userData, isLoggedIn]);

  return (
    <ActionsWrapper>
      <span>{isCategoryFollowedByUser ? "Folowing" : "Follow Category"}</span>
      <i
        className={`icon-bookmark${isCategoryFollowedByUser ? "" : "-empty"}`}
        onClick={handleFollowCategory}
      />
    </ActionsWrapper>
  );
};

export default CategoryActions;
