import { useContext } from "react";
import { VersionContext } from "@/components/providers/VersionProvider";
import { VersionContextType } from "@/data/types";

/**
 * Custom hook to access active portfolio version data and controls.
 * @returns VersionContextType with key, version, setKey, and keys.
 */
export function useVersion(): VersionContextType {
  const context = useContext(VersionContext);
  if (!context) {
    throw new Error("useVersion must be used within a VersionProvider");
  }
  return context;
}
