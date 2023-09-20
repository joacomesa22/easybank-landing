import React from "react";
import ArticleCard from "./ArticleCard";
import imgConfeti from "../assets/images/image-confetti.jpg";
import imgCurrency from "../assets/images/image-currency.jpg";
import imgPlane from "../assets/images/image-plane.jpg";
import imgRestaurant from "../assets/images/image-restaurant.jpg";

const Articles = () => {
  return (
    <section className="p-4 md:p-10 my-10 flex justify-center">
      <div className="flex flex-col items-center md:items-start text-center md:text-start gap-14 max-w-[1200px]">
        <h2 className="text-4xl text-[var(--darkBlue)]">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-8">
          <ArticleCard
            img={imgCurrency}
            author={"By Claire Robinson"}
            title={"Receive money in any currency with no fees"}
            text={
              "  The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single …"
            }
          />
          <ArticleCard
            img={imgRestaurant}
            author={"By Wilson Hutton"}
            title={"Treat yourself without worrying about money"}
            text={
              " Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
            }
          />
          <ArticleCard
            img={imgPlane}
            author={"By Wilson Hutton"}
            title={"Take your Easybank card wherever you go"}
            text={
              "   We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you …"
            }
          />
          <ArticleCard
            img={imgConfeti}
            author={"By Claire Robinson"}
            title={" Our invite-only Beta accounts are now live!"}
            text={
              "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ..."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Articles;
