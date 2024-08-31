"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./moving-cards";
import Glass from "@/lib/helpers";
import Container from "./container";
import Title from "./Title";

export function InfiniteMovingCardsDemo() {
  return (
    <Container>
      <Title
        subtitle="What Happy Client Say"
        title="Real Stories"
        cta="All Stories"
        to="/customer-testimonials"
      />
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </Container>
  );
}

const testimonials = [
  {
    quote:
      "Green Tech Resources are quite professional and helpful. They provided excellent Immigration Consulting required for our smooth processing of Canadian PR. Thank you so much Manoj and team for your great support and counselling.",
    name: "Aditi Joshi",
    title: "feedback published in our google page by customer",
    image: "/customer/aditi.png",
  },
  {
    quote:
      "Work with Gtr resources is the best decision that i could took. They helped me with all the process until i got my Pr approved a couple of days ago, me and all my family are so grateful with them. I know that all this process could be scary but they are the best option.",
    name: "Viky Díaz",
    title: "feedback published in our google page by customer",
    image: "/customer/viky.png",
  },
  {
    quote:
      "It's been an amazing journey, a friend refered me to Mr Manoj Goswam a very welcoming and patient man.He got me to send my credentials ,I had not done my IELTS test yet and he recommended I do the test,very patient he was all took time but he never gave up on me.Later he introduced me to Ms Zinal I love how transparent they are good bussiness ethics.",
    name: "Freeman Chinonzwa",
    title: "feedback published in our google page by customer",
    image: "/customer/freeman.jpg",
  },
  {
    quote:
      "This is Manaswi Chakma from Bangladesh.I am very pleased to work with Mr. Manoj Goswami the way he consult me to reach here in Canada. Specially mention to Mrs. Zinal who was very professional,reliable and smart in each and every step.Finally I will suggest to work with GTR Immigration who is really trying to move in Canada.",
    name: "Manaswi Chakma",
    title: "feedback published in our google page by customer",
    image: "/customer/manmasi.png",
  },
  {
    quote:
      "Would like to thank Mr. Manoj Goswami of GTR immigration to get my visitor visa approved in less than a month’s time.  He and his team are very efficient, prompt, and professional.  They know how to get things done.  They assisted me with all the documentation and i had to only sign the documents.",
    name: "Sumita Kolte",
    title: "feedback published in our google page by customer",
    image: "/customer/sumita.png",
  },
];
