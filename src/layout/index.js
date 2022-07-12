import {} from "@mui/material";

// Project imports
import Wrapper from "./Components/Wrapper";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import DialogGameOver from "./Components/DialogGameOver";

const MainLayout = () => {
    return (
        <Wrapper>
            <Header />
            <Body />
            <Footer />
            <DialogGameOver />
        </Wrapper>
    );
};
export default MainLayout;
