import { useNavigate } from "react-router-dom";

export const WithRoute = (Component) => {
  const Wrap = (props) => {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
  return Wrap;
};
