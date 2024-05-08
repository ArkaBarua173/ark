import ProjectComponent from "./ProjectComponent";

export default function Projects() {
  return (
    <div>
      <h1 className="pb-10 text-3xl tracking-wide font-bold text-center text-gray-50">
        🔬 My Projects
      </h1>
      <ol className="text-gray-300 list-decimal marker:text-xl marker:font-bold">
        <li className="pb-8 marker:text-xl marker:font-bold">
          <ProjectComponent
            title={"🏦 Binary Classification with Bank Churn Dataset"}
            description="This project aims to predict the probabilities of exiting the
            bank. XGBoost is used for this dataset. The model evaluated with
            Accuracy, Precision, F1 scroe, Recall and AUC_ROC score. SHAP is
            used to understand the model."
            github={"https://github.com/ArkaBarua173/Bank-churn-classification"}
            kaggle={
              "https://www.kaggle.com/code/arkabarua173/bank-churn-xgboost-roc-89-shap"
            }
          />
        </li>

        <li className="pb-8 marker:text-2xl marker:font-bold">
          <ProjectComponent
            title={"🐚 Abalage Age Regression Problem with Ensemble Method"}
            description="This project aims to Predicting the age of Abalone. 3 gradient
            boosting model XGBRegressor CatBoostRegressor LGBMRegressor is
            trained. Voting Regressor ( XGBRegressor + CatBoostRegressor +
            LGBMRegressor ) with soft voting is trained as the final model.
            The main evaluation metric used is Root Mean Squared Logarithmic
            Error."
            github={"https://github.com/ArkaBarua173/Abalone-Age-Regression"}
            kaggle={
              "https://www.kaggle.com/code/arkabarua173/regression-of-abalone-age"
            }
          />
        </li>

        <li className="pb-8 marker:text-2xl marker:font-bold">
          <ProjectComponent
            title={"☕ Clustering of Coffee quality"}
            description="This project aims to Clustering of coffee quality based on similarity with PCA and K-means. Preprocessing methods for the dataset involve handling missing values with SimpleImputer and dimensionality reduction using PCA, with three components accounting for 93% of the variation. K-means clustering is then used, with the elbow technique determining that 6 clusters are the ideal number."
            github={
              "https://github.com/ArkaBarua173/Clustering-of-coffee-quality"
            }
            kaggle={
              "https://www.kaggle.com/code/arkabarua173/clustering-of-coffee-quality-k-means-pca"
            }
          />
        </li>

        <li className="pb-8 marker:text-2xl marker:font-bold">
          <ProjectComponent
            title={"🚗 Vehicle Sales Analysis"}
            description="This project investigates into key insights such as average
            selling prices across car brands and models, comparison of
            automatic and manual transmission cars, examination of color
            distribution's impact on prices, analysis of car condition
            ratings, and the effect of odometer readings on selling prices."
            github={"https://github.com/ArkaBarua173/Vehicle-Sales-Analysis"}
            kaggle={
              "https://www.kaggle.com/code/arkabarua173/vehicle-sales-analysis"
            }
          />
        </li>
      </ol>
    </div>
  );
}
