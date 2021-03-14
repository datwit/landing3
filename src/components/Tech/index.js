import React from 'react'
import altair from "../../assets/images/technologies/altair.png"
import aws from "../../assets/images/technologies/aws.png"
import bokeh from "../../assets/images/technologies/bokeh.png"
import chalice from "../../assets/images/technologies/chalice.png"
import keras from "../../assets/images/technologies/keras.png"
import mat from "../../assets/images/technologies/matplotlib.png"
import nuxt from "../../assets/images/technologies/nuxtjs.png"
import python from "../../assets/images/technologies/python.png"
import sage from "../../assets/images/technologies/sagemaker.png"
import sklearn from "../../assets/images/technologies/sklearn.png"

const Tech = () => {
    return (
        <div class="container px-5 mx-auto">
            <h2 class="mt-4">Lorem ipsum dolor sit amet consectetur. </h2>
            <h4 class="mb-6">Blanditiis enim nihil earum qui, a non fugit consectetur nobis natus quasi...</h4>
            <div class="flex flex-wrap -m-4 sm:mt-1/4 lg:mt-0">
                <div class="p-4 w-1/2 sm:w-1/5">
                    <img src={altair} alt="Altair" />
                </div>
                <div class="p-4 w-1/2 sm:w-1/5">
                    <img src={aws} alt="Amazon Web Services" />
                </div>
                <div class="p-4 w-1/2 sm:w-1/5">
                    <img src={bokeh} alt="Bokeh" />
                </div>
                <div class="p-4 w-1/2 sm:w-1/5">
                    <img src={chalice} alt="Chalice" />
                </div>
                <div class="p-4 w-1/2 sm:w-1/5">
                    <img src={keras} alt="Keras" />
                </div>
                <div class="p-4 w-1/2 sm:w-1/5">
                    <img src={mat} alt="Matplotlib" />
                </div>
                <div class="p-4 w-1/2 sm:w-1/5">
                    <img src={nuxt} alt="Nuxtjs" />
                </div>
                <div class="p-4 w-1/2 sm:w-1/5">
                    <img src={python} alt="Python" />
                </div>
                <div class="p-4 w-1/2 sm:w-1/5">
                    <img src={sage} alt="Sagemaker" />
                </div>
                <div class="p-4 w-1/2 sm:w-1/5">
                    <img src={sklearn} alt="Sklearn" />
                </div>
            </div>
        </div>
    )
}

export default Tech
