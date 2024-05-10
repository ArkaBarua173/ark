import ProjectComponent from "./ProjectComponent";

export default function Projects() {
  return (
    <div className="px-8">
      <h1 className="pb-10 text-3xl tracking-wide font-bold text-center text-gray-50">
        🔬 My Projects
      </h1>
      <ol className="text-gray-300 list-decimal marker:text-xl marker:font-bold">
        <li className="pb-8 marker:text-xl marker:font-bold">
          <ProjectComponent
            title={"🏦 Binary Classification with an Imbalanced Dataset"}
            description="This project aims to predict the probabilities of customers exiting the bank.
             XGBoost is used to address the imbalance by increasing the weights of the minority class.
             The model was evaluated using accuracy, precision, F1 score, recall, and AUC-ROC score.
             SHAP (Shapley Additive Explanations) is used to understand the model."
            github={"https://github.com/ArkaBarua173/Bank-churn-classification"}
            kaggle={
              "https://www.kaggle.com/code/arkabarua173/bank-churn-xgboost-roc-89-shap"
            }
          />
        </li>

        <li className="pb-8 marker:text-2xl marker:font-bold">
          <ProjectComponent
            title={"🐚 Abalone Age Regression with Ensemble Method"}
            description="This project aims to predict the age of Abalone.
             XGBRegressor, CatBoostRegressor and LGBMRegressor are trained.
             A Voting Regressor ( XGBRegressor + CatBoostRegressor + LGBMRegressor ) with soft voting is trained as the final model.
             The primary evaluation metric used is Root Mean Squared Logarithmic Error."
            github={"https://github.com/ArkaBarua173/Abalone-Age-Regression"}
            kaggle={
              "https://www.kaggle.com/code/arkabarua173/regression-of-abalone-age"
            }
          />
        </li>

        <li className="pb-8 marker:text-2xl marker:font-bold">
          <ProjectComponent
            title={"☕ Clustering of Coffee quality"}
            description="This project aims to cluster coffee quality based on similarity with PCA and K-means.
             A dimensionality reduction technique PCA is used for this dataset while keeping important patterns and trends.
             K-means clustering is then used, with the elbow technique determining that 6 clusters are the ideal number."
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
