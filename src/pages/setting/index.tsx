import { hasPermissions } from "@/utils/hasPermissions";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Setting = () => {
  const router = useRouter()

  useEffect(() => {
    !hasPermissions(["accessSettingPermission"]) && router.push('/', undefined, { shallow: true })
  } , [router])

  return <div>Setting page</div>;
};

export default Setting;
