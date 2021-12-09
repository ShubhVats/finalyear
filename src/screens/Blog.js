import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Header from "../helpers/Header";
import MainFeaturedPost from "../helpers/MainFeaturedPost";
import FeaturedPost from "../helpers/FeaturedPost";
import Main from "../helpers/Main";
import Sidebar from "../helpers/Sidebar";
import Footer from "../helpers/Footer";
import post1 from "../helpers/blog-post.1.md";
import post2 from "../helpers/blog-post.2.md";
import post3 from "../helpers/blog-post.3.md";
import MainCarousel from "../helpers/MainCarousel";
import BlogCard from "../helpers/BlogCard";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  {
    title: "Top Universities",
    url: "http://localhost:3000/UniversityData",
    date: "Nov 12",
    description:
      "Discover the top universities around the world with the World University Rankings 2022, or go in depth on a particular region with the QS World University Rankings by Region 2022.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Top Courses",
    url: "http://localhost:3000/Exams",
    date: "Nov 11",
    description:
      "Choosing the Right Course for the Career is the most crucial decision to make and can be troublesome if not guided properly. In the current scenario with so many available options for courses and tough competition, it is very hard and confusing to decide for both students and parents. With so many influential people around, we often get swayed or simply do what is told by our parents.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Upcoming Exams",
    url: "http://localhost:3000/Exams",
    date: "Nov 11",
    description:
      "Govt. Jobs: The number of Government job aspirants is increasing at an alarming rate in India. More and more aspirants are applying for Government job posts each year.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Admission 2021",
    url:
      "Use our course matching tool to narrow down your study choices, or sign up for one of our worldwide in-person or virtual events and get the chance to meet representatives from the world's top universities.",
    date: "Nov 12",
    description:
      "83,075 MBBS seats recognized by the National Medical Commission (NMC) every year",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "eLearning",
    url: "http://localhost:3000/Exams",
    date: "Nov 11",
    description:
      "eLearning Learning is a collection of the leading industry thought leadership in the form of blogs, webinars, and downloadable resources, on one convenient website. We use reader data to auto-curate the articles, meaning that the most valuable resources move to the top. Additionally, you can sign up for our Daily or Weekly newsletters to receive these top-ranked articles right in your inbox, or you can sign up to be notified when new resources like webinars or ebooks are available.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
];

const featuredPosts = [
  {
    title: "Engineering",
    date: "Nov 12",
    description:
      "6078 recognized Engineering colleges, out of which 4263 colleges/universities offer BTech courses.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Management",
    date: "Nov 11",
    description:
      "6803 recognized Management colleges out of them 4760 offers MBA.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Medical",
    date: "Nov 12",
    description:
      "83,075 MBBS seats recognized by the National Medical Commission (NMC) every year",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Arts",
    date: "Nov 11",
    description:
      "Three-year or a four-year-long undergraduate programme that is the academic study of visual work of art.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header sections={sections} />
        <main>
          {/* <MainFeaturedPost post={mainFeaturedPost} /> */}
          <MainCarousel />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid
            style={{ marginTop: "8vh" }}
            container
            spacing={4}
            className={classes.mainGrid}
          >
            {/* <Main title="From the firehose" posts={posts} /> */}
            <Grid container spacing={8}>
              {sections.map((post) => (
                <BlogCard key={post.title} post={post} />
              ))}
            </Grid>

            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
