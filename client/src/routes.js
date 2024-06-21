import App from "./components/App";
import Home from "./pages/Home";
import Students from "./pages/Students";
import Courses from "./pages/Courses";
import Registrations from "./pages/Registrations";

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/students',
                element: <Students />
            },
            {
                path: '/courses',
                element: <Courses />
            },
            {
                path: '/registrations',
                element: <Registrations />
            }
        ]
    }
]

export default routes