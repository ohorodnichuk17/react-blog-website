import Header from "../components/Header.tsx";
import Search from "../components/Search.tsx";
import IntroPost from "../components/IntroPost.tsx";
import Blogs from "../components/Blogs.tsx";
import Footer from "../components/Footer.tsx";

function Home() {
    return (
        <div>
            <Header/>
            <Search/>
            <IntroPost/>
            <Blogs/>
            <Footer/>
        </div>
    );
}

export default Home;