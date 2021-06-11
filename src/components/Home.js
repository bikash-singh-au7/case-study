
import React from 'react'
import Header from './Header';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const Home = () => {
    return (
        <Router>
            <Header />


            {/* Body Part */}
            <div className={"container-fluid"}>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <img className={"covert"} src="./images/covet.png" alt="" />
                    </div>
                    <div className="col-md-12 text-center">
                        <h1 className={"title"}>Web App for Covert</h1>
                        <p className={"create-custom-landin"}>
                            Create custon landing pages with Omega that converts more visitors than any website
                        </p>
                    </div>

                    <div className="col-md-9 m-auto text-center">
                        <img src="./images/rectangle.png" alt="" className="img img-fluid mt-5" />
                    </div>


                    {/*   */}
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-8 mx-auto mt-5">
                                <div className="mt-4">
                                    <h5 class={"font-weight-bold pb-4"}>Client Brief</h5>
                                    <p className={""}>
                                        A Senior Data Enginee provides technical and delivery leadership fot a team of developers working on data integration and procession projects. This role will work with dtakeholders and other developers to design and implement technical data solutions for the business a way that balances quality, coast, time and maintainability.
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <h5 className={"font-weight-bold pb-4"}>Problems</h5>
                                    <p className={"p"}>
                                        A Senior Data Enginee provides technical and delivery leadership fot a team of developers working on data integration and procession projects. This role will work with stakeholders and other developers to design and implement technical data solutions for the business a way that balances quality, coast, time and maintainability.  technical data solutions for the business a way that balances quality, coast, time and maintainability.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-9 mx-auto mt-5">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card bg-none border-0">
                                    <img src="./images/rectangle_2.png" alt="" className="card-img-top" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card bg-none border-0">
                                    <img src="./images/rectangle-copy.png" alt="" className="card-img-top" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-8 mx-auto mt-5">
                                <div className="mt-4">
                                    <h5 class={"font-weight-bold pb-4"}>Solutions</h5>
                                    <p className={""}>
                                        A Senior Data Enginee provides technical and delivery leadership fot a team of developers working on data integration and procession projects. This role will work with dtakeholders and other developers to design and implement
                                    </p>

                                    <ul>
                                        <li>
                                            Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding.
                                        </li>
                                        <li>
                                            You might be surprised to know that not onlu do we run some of the biggest websites in the world; we're also growing really fast! We have close to 600 staff and contractors worldwide, adding mpre than 100 people to the business, which grows year on year since 2017
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-4">
                                    <h5 className={"font-weight-bold pb-4"}>Learning</h5>
                                    <p className={"p"}>
                                        A Senior Data Enginee provides technical and delivery leadership fot a team of developers working on data integration and procession projects. This role will work with stakeholders and other developers to design and implement technical data solutions for the business a way that balances quality, coast, time and maintainability.  technical data solutions for the business a way that balances quality, coast, time and maintainability.
                                    </p>
                                </div>

                                <div className="py-4">
                                    <Link className={"btn btn-danger px-5 py-3"}>  Check Live Website</Link>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="col-md-12 text-center pb-5">
                        <h2 className={"title-second py-5"}>More Case Studies</h2>

                        <div className="row">
                            <div className="col-md-9 m-auto">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card case-study-card">
                                            <div className="card-header p-0">
                                                <img src="./images/rectangle_3.png" alt="" className="card-img-top" />
                                                <div className="case-study-brand">
                                                    <img className={""} src="./images/logo-1.png" alt="" />
                                                </div>

                                            </div>

                                            <div className="card-body text-left">
                                                <h5 className={"font-weight-bold mb-3"}>Brag Mobile App</h5>
                                                <p style={{ color: "#5a5a5a" }}>
                                                    Throwing consider dwelling bachelor joy her proposal laghter. Raptures returned disposed one entirely her mwn ham.
                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-4">
                                        <div className="card case-study-card">

                                            <div className="card-header p-0">
                                                <img src="./images/rectangle_4.png" alt="" className="card-img-top" />
                                                <div className="case-study-brand">
                                                    <img className={""} src="./images/covet.png" alt="" />
                                                </div>

                                            </div>


                                            <div className="card-body text-left">
                                                <h5 className={"font-weight-bold mb-3"}>Web App for Covert</h5>
                                                <p style={{ color: "#5a5a5a" }}>
                                                    Throwing consider dwelling bachelor joy her proposal laghter. Raptures returned disposed one entirely her mwn ham.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="card case-study-card">
                                            <div className="card-header p-0">
                                                <img src="./images/rectangle_5.png" alt="" className="card-img-top" />
                                                <div className="case-study-brand">
                                                    <img className={""} src="./images/drager.png" alt="" />
                                                </div>

                                            </div>

                                            <div className="card-body text-left">
                                                <h5 className={"font-weight-bold mb-3"}>Office Solution for Drager</h5>
                                                <p style={{ color: "#5a5a5a" }}>
                                                    Throwing consider dwelling bachelor joy her proposal laghter. Raptures returned disposed one entirely her mwn ham.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


                {/* footer */}
                <div className="row footer bg-dark p-0">
                    <img src="./images/white.png" alt="" className={"white"} />
                    <div className="oval"></div>

                    <div className="col-md-12 mt-5">
                        <div className="row">
                            <div className="col-md-4 text-center mx-auto">
                                <h2 className={"title-second py-4 text-white"}>Ready to Lounch?</h2>
                                <p className={"px-4"} style={{ color: "#C8C8C8" }}>
                                    Are u interested to join our team? Check out our job openings and apply on your sutaible role
                                </p>
                                <Link className={"btn btn-danger px-4 py-2 mt-4"}>  Get Omega Now</Link>
                            </div>
                        </div>
                    </div>


                    {/* Footer links */}
                    <div className="col-md-9 mx-auto mt-5 py-5">
                        <div className="row">
                            <div className="col-sm mt-3">
                                <h6 className={"font-weight-bold text-white"}>Omega</h6>
                            </div>

                            <div className="col-sm mt-3">
                                <h6 className={"font-weight-bold text-white mb-3"}>About</h6>
                                <ul>
                                    <li><Link to={""}>Our Mission</Link></li>
                                    <li><Link to={""}>Our Story</Link></li>
                                    <li><Link to={""}>Team Members</Link></li>
                                </ul>
                            </div>

                            <div className="col-sm mt-3">
                                <h6 className={"font-weight-bold text-white mb-3"}>Learn</h6>
                                <ul>
                                    <li><Link to={""}>Tutorials</Link></li>
                                    <li><Link to={""}>How it works</Link></li>
                                    <li><Link to={""}>F.A.Q</Link></li>
                                </ul>
                            </div>

                            <div className="col-sm mt-3">
                                <h6 className={"font-weight-bold text-white mb-3"}>Stories</h6>
                                <ul>
                                    <li><Link to={""}>Blog</Link></li>
                                    <li><Link to={""}>Team Story</Link></li>
                                </ul>
                            </div>

                            <div className="col-sm mt-3">
                                <h6 className={"font-weight-bold text-white mb-3"}>Hire</h6>
                                <ul>
                                    <li><Link to={""}>Career</Link></li>
                                    <li><Link to={""}>Freelancers</Link></li>
                                    <li><Link to={""}>Trainee</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-md-12">
                                <div className={"line"} />
                            </div>
                        </div>

                    </div>


                    {/* Credit */}
                    <div className="col-md-9 m-auto">
                        <div className="row">
                            <div className="col">
                                <p className={"credit"}>@2020 UXTheme, All Rights Reserved</p>
                            </div>
                            <div className="col text-right">
                                <Link to={""} className={"px-2"}>
                                    <img src="./images/logo-twitter-2-x.png" alt="" />
                                </Link>
                                <Link to={""} className={"px-2"}>
                                    <img src="./images/logo-fb-simple-2-x.png" alt="" />
                                </Link>
                                <Link to={""} className={"px-2"}>
                                    <img src="./images/google-2-x.png" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Router>
    )
}

export default Home;