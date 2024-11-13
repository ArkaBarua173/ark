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
            title={
              "🚢 Shipping and Logistics Data Analysis Report Using Power BI"
            }
            description="This project utilizes Power BI to visualize shipping and logistics data, focusing on KPIs like shipment value, freight cost per KG, and on-time delivery rate. It provides insights into freight efficiency by analyzing shipment modes and comparing shipment value and freight cost by product group."
            github={
              "https://github.com/ArkaBarua173/Shipping-and-Logistics-Analysis"
            }
          />
        </li>

        <li className="pb-8 marker:text-xl marker:font-bold">
          <ProjectComponent
            title={
              "💲 Financial Performance Report with Detailed KPI Breakdowns"
            }
            description="This financial performance report presents essential metrics, including Revenue, Gross Profit, Expenses, and Net Income, offering a clear view of overall financial health. Provides detailed KPI breakdowns, analyzing trends by division and account type, and comparing year-over-year performance for strategic insights."
            github={
              "https://github.com/ArkaBarua173/Financial-Performance-Report"
            }
          />
        </li>
        <li className="pb-8 marker:text-xl marker:font-bold">
          <ProjectComponent
            title={"🏦 Binary Classification with an Imbalanced Dataset"}
            description="This project aims to predict the probabilities of customers exiting the bank.
             XGBoost is used to address the imbalance by increasing the weights of the minority class.
             The model was evaluated using accuracy, precision, F1 score, recall, and AUC-ROC score.
             SHAP (Shapley Additive Explanations) is used to understand the model."
            github={"https://github.com/ArkaBarua173/Bank-churn-classification"}
          />
        </li>

        <li className="pb-8 marker:text-xl marker:font-bold">
          <ProjectComponent
            title={"🐚 Abalone Age Regression with Ensemble Method"}
            description="This project aims to predict the age of Abalone.
             XGBRegressor, CatBoostRegressor and LGBMRegressor are trained.
             A Voting Regressor ( XGBRegressor + CatBoostRegressor + LGBMRegressor ) with soft voting is trained as the final model.
             The primary evaluation metric used is Root Mean Squared Logarithmic Error."
            github={"https://github.com/ArkaBarua173/Abalone-Age-Regression"}
          />
        </li>

        <li className="pb-8 marker:text-xl marker:font-bold">
          <ProjectComponent
            title={"☕ Clustering of Coffee quality"}
            description="This project aims to cluster coffee quality based on similarity with PCA and K-means.
             A dimensionality reduction technique PCA is used for this dataset while keeping important patterns and trends.
             K-means clustering is then used, with the elbow technique determining that 6 clusters are the ideal number."
            github={
              "https://github.com/ArkaBarua173/Clustering-of-coffee-quality"
            }
          />
        </li>
      </ol>
    </div>
  );
}
