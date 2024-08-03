import React from "react";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import Image from "next/image";

function RecipeList({ recipeList }) {
  // console.log(recipeList);
  return (
    <div>
      <div className="p-4 mx-auto lg:max-w-[1300px] md:max-w-4xl sm:max-w-full">
        {/* <Link href={"/"}>
          <button className="rounded-full bg-slate-500 p-2 mb-3">
            Go Back to Home
          </button>
        </Link> */}
        {/* <div>
          <h2 className=" text-4xl font-bold border-b-2 border-orange-300 pb-1 text-gray-800 mb-12 w-max mx-auto">
            Recipes
          </h2>
        </div> */}
        <div className="bg-orange-400">
          <div className="py-20">
            <h2 className="text-center font-bold text-[20px] md:text-[40px]">
              RECIPE
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {recipeList && recipeList.length > 0
            ? recipeList.map((recipe ,index) => (
                <Link key={index} href={`/recipe-list/${recipe.id}`}>
                  <Card>
                    <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                      <div className="w-full aspect-w-16 aepect-h-8 lg:h-80">
                        <Image
                          src={recipe.image}
                          alt={recipe.name}
                          width={200}
                          height={200}
                          className="h-full w-full object-cover object-top mt-5"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-800">
                          {recipe.name}
                        </h3>
                        <div className="mt-4 flex items-center flex-wrap gap-2">
                          <p className="text-lg text-gray-800">
                            rating:{recipe.rating}
                          </p>
                          <div className="ml-auto text-lg text-gray-800">
                            <p className="text-lg text-gray-800 font-bold">
                              {recipe.cuisine}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
export default RecipeList;
