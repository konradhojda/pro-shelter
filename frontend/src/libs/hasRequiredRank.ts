import { userRole } from "../data/navData";

export function hasRequiredRank(requiredRank?: userRole, userRank?: userRole) {
  if (!requiredRank) {
    return true;
  }
  if (!userRank) {
    return false;
  }
  return userRank === requiredRank || userRank === "admin";
}
