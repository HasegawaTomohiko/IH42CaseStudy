import FormPropsTextFields from "@/components/login";
import Header from "@/components/layout/header";

export default function login() {
    return (
      <>
          <Header menutitle="ログイン" />
          <FormPropsTextFields />
      </>
    )
  }