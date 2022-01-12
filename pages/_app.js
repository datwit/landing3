import '../styles/tailwind.css' 
import Head from 'next/head'
import TagManager from 'react-gtm-module'
import React,{useEffect} from 'react'

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        TagManager.initialize({ gtmId: 'GTM-P79KWZ5' });
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'dataset': [
                {
                  "sepal.length": 5.1,
                  "sepal.width": 3.5,
                  "petal.length": 1.4,
                  "petal.width": 0.2,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 4.9,
                  "sepal.width": 3,
                  "petal.length": 1.4,
                  "petal.width": 0.2,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 4.7,
                  "sepal.width": 3.2,
                  "petal.length": 1.3,
                  "petal.width": 0.2,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 4.6,
                  "sepal.width": 3.1,
                  "petal.length": 1.5,
                  "petal.width": 0.2,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 5,
                  "sepal.width": 3.6,
                  "petal.length": 1.4,
                  "petal.width": 0.2,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 5.4,
                  "sepal.width": 3.9,
                  "petal.length": 1.7,
                  "petal.width": 0.4,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 4.6,
                  "sepal.width": 3.4,
                  "petal.length": 1.4,
                  "petal.width": 0.3,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 5,
                  "sepal.width": 3.4,
                  "petal.length": 1.5,
                  "petal.width": 0.2,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 4.4,
                  "sepal.width": 2.9,
                  "petal.length": 1.4,
                  "petal.width": 0.2,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 4.9,
                  "sepal.width": 3.1,
                  "petal.length": 1.5,
                  "petal.width": 0.1,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 5.4,
                  "sepal.width": 3.7,
                  "petal.length": 1.5,
                  "petal.width": 0.2,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 4.8,
                  "sepal.width": 3.4,
                  "petal.length": 1.6,
                  "petal.width": 0.2,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 4.8,
                  "sepal.width": 3,
                  "petal.length": 1.4,
                  "petal.width": 0.1,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 4.3,
                  "sepal.width": 3,
                  "petal.length": 1.1,
                  "petal.width": 0.1,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 5.8,
                  "sepal.width": 4,
                  "petal.length": 1.2,
                  "petal.width": 0.2,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 5.7,
                  "sepal.width": 4.4,
                  "petal.length": 1.5,
                  "petal.width": 0.4,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 5.4,
                  "sepal.width": 3.9,
                  "petal.length": 1.3,
                  "petal.width": 0.4,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 5.1,
                  "sepal.width": 3.5,
                  "petal.length": 1.4,
                  "petal.width": 0.3,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 5.7,
                  "sepal.width": 3.8,
                  "petal.length": 1.7,
                  "petal.width": 0.3,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 5.1,
                  "sepal.width": 3.8,
                  "petal.length": 1.5,
                  "petal.width": 0.3,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 5.4,
                  "sepal.width": 3.4,
                  "petal.length": 1.7,
                  "petal.width": 0.2,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 5.1,
                  "sepal.width": 3.7,
                  "petal.length": 1.5,
                  "petal.width": 0.4,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 4.6,
                  "sepal.width": 3.6,
                  "petal.length": 1,
                  "petal.width": 0.2,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 5.1,
                  "sepal.width": 3.3,
                  "petal.length": 1.7,
                  "petal.width": 0.5,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 4.8,
                  "sepal.width": 3.4,
                  "petal.length": 1.9,
                  "petal.width": 0.2,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 5,
                  "sepal.width": 3,
                  "petal.length": 1.6,
                  "petal.width": 0.2,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 5,
                  "sepal.width": 3.4,
                  "petal.length": 1.6,
                  "petal.width": 0.4,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 5.2,
                  "sepal.width": 3.5,
                  "petal.length": 1.5,
                  "petal.width": 0.2,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 5.2,
                  "sepal.width": 3.4,
                  "petal.length": 1.4,
                  "petal.width": 0.2,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 4.7,
                  "sepal.width": 3.2,
                  "petal.length": 1.6,
                  "petal.width": 0.2,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 4.8,
                  "sepal.width": 3.1,
                  "petal.length": 1.6,
                  "petal.width": 0.2,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 5.4,
                  "sepal.width": 3.4,
                  "petal.length": 1.5,
                  "petal.width": 0.4,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 5.2,
                  "sepal.width": 4.1,
                  "petal.length": 1.5,
                  "petal.width": 0.1,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 5.5,
                  "sepal.width": 4.2,
                  "petal.length": 1.4,
                  "petal.width": 0.2,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 4.9,
                  "sepal.width": 3.1,
                  "petal.length": 1.5,
                  "petal.width": 0.2,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 5,
                  "sepal.width": 3.2,
                  "petal.length": 1.2,
                  "petal.width": 0.2,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 5.5,
                  "sepal.width": 3.5,
                  "petal.length": 1.3,
                  "petal.width": 0.2,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 4.9,
                  "sepal.width": 3.6,
                  "petal.length": 1.4,
                  "petal.width": 0.1,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 4.4,
                  "sepal.width": 3,
                  "petal.length": 1.3,
                  "petal.width": 0.2,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 5.1,
                  "sepal.width": 3.4,
                  "petal.length": 1.5,
                  "petal.width": 0.2,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 5,
                  "sepal.width": 3.5,
                  "petal.length": 1.3,
                  "petal.width": 0.3,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 4.5,
                  "sepal.width": 2.3,
                  "petal.length": 1.3,
                  "petal.width": 0.3,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 4.4,
                  "sepal.width": 3.2,
                  "petal.length": 1.3,
                  "petal.width": 0.2,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 5,
                  "sepal.width": 3.5,
                  "petal.length": 1.6,
                  "petal.width": 0.6,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 5.1,
                  "sepal.width": 3.8,
                  "petal.length": 1.9,
                  "petal.width": 0.4,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 4.8,
                  "sepal.width": 3,
                  "petal.length": 1.4,
                  "petal.width": 0.3,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 5.1,
                  "sepal.width": 3.8,
                  "petal.length": 1.6,
                  "petal.width": 0.2,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 4.6,
                  "sepal.width": 3.2,
                  "petal.length": 1.4,
                  "petal.width": 0.2,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 5.3,
                  "sepal.width": 3.7,
                  "petal.length": 1.5,
                  "petal.width": 0.2,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 5,
                  "sepal.width": 3.3,
                  "petal.length": 1.4,
                  "petal.width": 0.2,
                  "variety": "Setosa"
                },
                {
                  "sepal.length": 7,
                  "sepal.width": 3.2,
                  "petal.length": 4.7,
                  "petal.width": 1.4,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 6.4,
                  "sepal.width": 3.2,
                  "petal.length": 4.5,
                  "petal.width": 1.5,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 6.9,
                  "sepal.width": 3.1,
                  "petal.length": 4.9,
                  "petal.width": 1.5,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 5.5,
                  "sepal.width": 2.3,
                  "petal.length": 4,
                  "petal.width": 1.3,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 6.5,
                  "sepal.width": 2.8,
                  "petal.length": 4.6,
                  "petal.width": 1.5,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 5.7,
                  "sepal.width": 2.8,
                  "petal.length": 4.5,
                  "petal.width": 1.3,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 6.3,
                  "sepal.width": 3.3,
                  "petal.length": 4.7,
                  "petal.width": 1.6,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 4.9,
                  "sepal.width": 2.4,
                  "petal.length": 3.3,
                  "petal.width": 1,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 6.6,
                  "sepal.width": 2.9,
                  "petal.length": 4.6,
                  "petal.width": 1.3,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 5.2,
                  "sepal.width": 2.7,
                  "petal.length": 3.9,
                  "petal.width": 1.4,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 5,
                  "sepal.width": 2,
                  "petal.length": 3.5,
                  "petal.width": 1,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 5.9,
                  "sepal.width": 3,
                  "petal.length": 4.2,
                  "petal.width": 1.5,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 6,
                  "sepal.width": 2.2,
                  "petal.length": 4,
                  "petal.width": 1,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 6.1,
                  "sepal.width": 2.9,
                  "petal.length": 4.7,
                  "petal.width": 1.4,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 5.6,
                  "sepal.width": 2.9,
                  "petal.length": 3.6,
                  "petal.width": 1.3,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 6.7,
                  "sepal.width": 3.1,
                  "petal.length": 4.4,
                  "petal.width": 1.4,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 5.6,
                  "sepal.width": 3,
                  "petal.length": 4.5,
                  "petal.width": 1.5,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 5.8,
                  "sepal.width": 2.7,
                  "petal.length": 4.1,
                  "petal.width": 1,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 6.2,
                  "sepal.width": 2.2,
                  "petal.length": 4.5,
                  "petal.width": 1.5,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 5.6,
                  "sepal.width": 2.5,
                  "petal.length": 3.9,
                  "petal.width": 1.1,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 5.9,
                  "sepal.width": 3.2,
                  "petal.length": 4.8,
                  "petal.width": 1.8,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 6.1,
                  "sepal.width": 2.8,
                  "petal.length": 4,
                  "petal.width": 1.3,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 6.3,
                  "sepal.width": 2.5,
                  "petal.length": 4.9,
                  "petal.width": 1.5,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 6.1,
                  "sepal.width": 2.8,
                  "petal.length": 4.7,
                  "petal.width": 1.2,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 6.4,
                  "sepal.width": 2.9,
                  "petal.length": 4.3,
                  "petal.width": 1.3,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 6.6,
                  "sepal.width": 3,
                  "petal.length": 4.4,
                  "petal.width": 1.4,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 6.8,
                  "sepal.width": 2.8,
                  "petal.length": 4.8,
                  "petal.width": 1.4,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 6.7,
                  "sepal.width": 3,
                  "petal.length": 5,
                  "petal.width": 1.7,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 6,
                  "sepal.width": 2.9,
                  "petal.length": 4.5,
                  "petal.width": 1.5,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 5.7,
                  "sepal.width": 2.6,
                  "petal.length": 3.5,
                  "petal.width": 1,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 5.5,
                  "sepal.width": 2.4,
                  "petal.length": 3.8,
                  "petal.width": 1.1,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 5.5,
                  "sepal.width": 2.4,
                  "petal.length": 3.7,
                  "petal.width": 1,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 5.8,
                  "sepal.width": 2.7,
                  "petal.length": 3.9,
                  "petal.width": 1.2,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 6,
                  "sepal.width": 2.7,
                  "petal.length": 5.1,
                  "petal.width": 1.6,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 5.4,
                  "sepal.width": 3,
                  "petal.length": 4.5,
                  "petal.width": 1.5,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 6,
                  "sepal.width": 3.4,
                  "petal.length": 4.5,
                  "petal.width": 1.6,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 6.7,
                  "sepal.width": 3.1,
                  "petal.length": 4.7,
                  "petal.width": 1.5,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 6.3,
                  "sepal.width": 2.3,
                  "petal.length": 4.4,
                  "petal.width": 1.3,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 5.6,
                  "sepal.width": 3,
                  "petal.length": 4.1,
                  "petal.width": 1.3,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 5.5,
                  "sepal.width": 2.5,
                  "petal.length": 4,
                  "petal.width": 1.3,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 5.5,
                  "sepal.width": 2.6,
                  "petal.length": 4.4,
                  "petal.width": 1.2,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 6.1,
                  "sepal.width": 3,
                  "petal.length": 4.6,
                  "petal.width": 1.4,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 5.8,
                  "sepal.width": 2.6,
                  "petal.length": 4,
                  "petal.width": 1.2,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 5,
                  "sepal.width": 2.3,
                  "petal.length": 3.3,
                  "petal.width": 1,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 5.6,
                  "sepal.width": 2.7,
                  "petal.length": 4.2,
                  "petal.width": 1.3,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 5.7,
                  "sepal.width": 3,
                  "petal.length": 4.2,
                  "petal.width": 1.2,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 5.7,
                  "sepal.width": 2.9,
                  "petal.length": 4.2,
                  "petal.width": 1.3,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 6.2,
                  "sepal.width": 2.9,
                  "petal.length": 4.3,
                  "petal.width": 1.3,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 5.1,
                  "sepal.width": 2.5,
                  "petal.length": 3,
                  "petal.width": 1.1,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 5.7,
                  "sepal.width": 2.8,
                  "petal.length": 4.1,
                  "petal.width": 1.3,
                  "variety": "Versicolor"
                },
                {
                  "sepal.length": 6.3,
                  "sepal.width": 3.3,
                  "petal.length": 6,
                  "petal.width": 2.5,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 5.8,
                  "sepal.width": 2.7,
                  "petal.length": 5.1,
                  "petal.width": 1.9,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 7.1,
                  "sepal.width": 3,
                  "petal.length": 5.9,
                  "petal.width": 2.1,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 6.3,
                  "sepal.width": 2.9,
                  "petal.length": 5.6,
                  "petal.width": 1.8,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 6.5,
                  "sepal.width": 3,
                  "petal.length": 5.8,
                  "petal.width": 2.2,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 7.6,
                  "sepal.width": 3,
                  "petal.length": 6.6,
                  "petal.width": 2.1,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 4.9,
                  "sepal.width": 2.5,
                  "petal.length": 4.5,
                  "petal.width": 1.7,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 7.3,
                  "sepal.width": 2.9,
                  "petal.length": 6.3,
                  "petal.width": 1.8,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 6.7,
                  "sepal.width": 2.5,
                  "petal.length": 5.8,
                  "petal.width": 1.8,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 7.2,
                  "sepal.width": 3.6,
                  "petal.length": 6.1,
                  "petal.width": 2.5,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 6.5,
                  "sepal.width": 3.2,
                  "petal.length": 5.1,
                  "petal.width": 2,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 6.4,
                  "sepal.width": 2.7,
                  "petal.length": 5.3,
                  "petal.width": 1.9,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 6.8,
                  "sepal.width": 3,
                  "petal.length": 5.5,
                  "petal.width": 2.1,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 5.7,
                  "sepal.width": 2.5,
                  "petal.length": 5,
                  "petal.width": 2,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 5.8,
                  "sepal.width": 2.8,
                  "petal.length": 5.1,
                  "petal.width": 2.4,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 6.4,
                  "sepal.width": 3.2,
                  "petal.length": 5.3,
                  "petal.width": 2.3,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 6.5,
                  "sepal.width": 3,
                  "petal.length": 5.5,
                  "petal.width": 1.8,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 7.7,
                  "sepal.width": 3.8,
                  "petal.length": 6.7,
                  "petal.width": 2.2,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 7.7,
                  "sepal.width": 2.6,
                  "petal.length": 6.9,
                  "petal.width": 2.3,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 6,
                  "sepal.width": 2.2,
                  "petal.length": 5,
                  "petal.width": 1.5,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 6.9,
                  "sepal.width": 3.2,
                  "petal.length": 5.7,
                  "petal.width": 2.3,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 5.6,
                  "sepal.width": 2.8,
                  "petal.length": 4.9,
                  "petal.width": 2,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 7.7,
                  "sepal.width": 2.8,
                  "petal.length": 6.7,
                  "petal.width": 2,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 6.3,
                  "sepal.width": 2.7,
                  "petal.length": 4.9,
                  "petal.width": 1.8,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 6.7,
                  "sepal.width": 3.3,
                  "petal.length": 5.7,
                  "petal.width": 2.1,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 7.2,
                  "sepal.width": 3.2,
                  "petal.length": 6,
                  "petal.width": 1.8,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 6.2,
                  "sepal.width": 2.8,
                  "petal.length": 4.8,
                  "petal.width": 1.8,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 6.1,
                  "sepal.width": 3,
                  "petal.length": 4.9,
                  "petal.width": 1.8,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 6.4,
                  "sepal.width": 2.8,
                  "petal.length": 5.6,
                  "petal.width": 2.1,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 7.2,
                  "sepal.width": 3,
                  "petal.length": 5.8,
                  "petal.width": 1.6,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 7.4,
                  "sepal.width": 2.8,
                  "petal.length": 6.1,
                  "petal.width": 1.9,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 7.9,
                  "sepal.width": 3.8,
                  "petal.length": 6.4,
                  "petal.width": 2,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 6.4,
                  "sepal.width": 2.8,
                  "petal.length": 5.6,
                  "petal.width": 2.2,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 6.3,
                  "sepal.width": 2.8,
                  "petal.length": 5.1,
                  "petal.width": 1.5,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 6.1,
                  "sepal.width": 2.6,
                  "petal.length": 5.6,
                  "petal.width": 1.4,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 7.7,
                  "sepal.width": 3,
                  "petal.length": 6.1,
                  "petal.width": 2.3,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 6.3,
                  "sepal.width": 3.4,
                  "petal.length": 5.6,
                  "petal.width": 2.4,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 6.4,
                  "sepal.width": 3.1,
                  "petal.length": 5.5,
                  "petal.width": 1.8,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 6,
                  "sepal.width": 3,
                  "petal.length": 4.8,
                  "petal.width": 1.8,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 6.9,
                  "sepal.width": 3.1,
                  "petal.length": 5.4,
                  "petal.width": 2.1,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 6.7,
                  "sepal.width": 3.1,
                  "petal.length": 5.6,
                  "petal.width": 2.4,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 6.9,
                  "sepal.width": 3.1,
                  "petal.length": 5.1,
                  "petal.width": 2.3,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 5.8,
                  "sepal.width": 2.7,
                  "petal.length": 5.1,
                  "petal.width": 1.9,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 6.8,
                  "sepal.width": 3.2,
                  "petal.length": 5.9,
                  "petal.width": 2.3,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 6.7,
                  "sepal.width": 3.3,
                  "petal.length": 5.7,
                  "petal.width": 2.5,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 6.7,
                  "sepal.width": 3,
                  "petal.length": 5.2,
                  "petal.width": 2.3,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 6.3,
                  "sepal.width": 2.5,
                  "petal.length": 5,
                  "petal.width": 1.9,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 6.5,
                  "sepal.width": 3,
                  "petal.length": 5.2,
                  "petal.width": 2,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 6.2,
                  "sepal.width": 3.4,
                  "petal.length": 5.4,
                  "petal.width": 2.3,
                  "variety": "Virginica"
                },
                {
                  "sepal.length": 5.9,
                  "sepal.width": 3,
                  "petal.length": 5.1,
                  "petal.width": 1.8,
                  "variety": "Virginica"
                }
            ]
        })               
    }, []);     
    <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    return <Component {...pageProps} />
}

export default MyApp
