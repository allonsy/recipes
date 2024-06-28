import { JSX } from "solid-js";
import { HeaderBar } from "../HeaderBar";

type Props = {
  children?: JSX.Element;
};

export const GlobalLayout = (props: Props) => {
  return (
    <>
      <HeaderBar />
      {props.children}
    </>
  );
};
