export interface ProjectMetric {
  label: string;
  value: string;
  description: string;
}

export interface ChartItem {
  title: string;
  src: string;
  caption: string;
}

export interface CodeSnippet {
  title: string;
  language: string;
  code: string;
}

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  stack: string[];
  metrics: ProjectMetric[];
  problem: string;
  datasetInfo: {
    name: string;
    source: string;
    records: string;
    features: string;
    description: string;
  };
  dataCleaning: string[];
  edaPoints: string[];
  keyFindings: string[];
  businessImpact: string[];
  charts: ChartItem[];
  codeSnippets: CodeSnippet[];
  githubUrl: string;
  notebookUrl?: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "EBINESAR A",
    title: "Data Analyst & Python Developer",
    smallTag: "DATA ANALYTICS • PYTHON • SQL",
    heroGreeting: "Hi, I'm Ebinesar A.",
    heroHeading: "Data Analytics & Python Data Analysis.",
    heroSubtext:
      "Computer Science undergraduate at GRT Institute specializing in Python data wrangling, SQL queries, exploratory data analysis (EDA), and clear statistical visualizations.",
    aboutHeading: "About Me",
    aboutText: [
      "I am a Computer Science & Engineering undergraduate at GRT Institute of Engineering and Technology (Batch of 2028) focused on Data Analytics.",
      "My work centers around practical data wrangling: taking messy CSV/Excel files, cleaning null values, parsing dates, running exploratory statistics, and creating readable charts using Pandas, Matplotlib, and Seaborn.",
      "Rather than relying on automated black-box tools, I prefer writing clean Python scripts and Jupyter notebooks to understand data distributions step by step.",
    ],
    highlights: [
      "B.E. Computer Science & Engineering (2024–2028)",
      "NPTEL Certified: Data Analytics with Python",
      "NPTEL Certified: Data Structures & Algorithms (Java)",
      "Selected for NPTEL Winter Internship Program",
    ],
    social: {
      github: "https://github.com/Ebinesar91",
      linkedin: "https://www.linkedin.com/in/ebinesar-a-255531337/",
      email: "ebinesarebinesar192@gmail.com",
    },
  },
  skills: [
    {
      category: "Programming Languages",
      items: [
        { name: "Python", level: "Core Scripting", icon: "Python" },
        { name: "Java", level: "Algorithms & OOP", icon: "Java" },
        { name: "C", level: "Logic & Fundamentals", icon: "C" },
      ],
    },
    {
      category: "Data Analytics & EDA",
      items: [
        { name: "Data Cleaning", level: "Handling NaN & Outliers", icon: "Data Cleaning" },
        { name: "EDA", level: "Exploratory Data Analysis", icon: "EDA" },
        { name: "Data Interpretation", level: "Statistical Insights", icon: "Data Interpretation" },
        { name: "Statistical Analysis", level: "Correlation & Percentiles", icon: "Statistical Analysis" },
        { name: "Data Visualization", level: "Plots & Distributions", icon: "Data Visualization" },
      ],
    },
    {
      category: "Python Analytics Libraries",
      items: [
        { name: "Pandas", level: "DataFrames & Aggregations", icon: "Pandas" },
        { name: "NumPy", level: "Array Vectorization", icon: "NumPy" },
        { name: "Matplotlib", level: "Custom Chart Plotting", icon: "Matplotlib" },
        { name: "Seaborn", level: "Statistical Heatmaps & KDE", icon: "Seaborn" },
      ],
    },
    {
      category: "Database & Backends",
      items: [
        { name: "SQL", level: "Queries, Joins & Aggregations", icon: "SQL" },
        { name: "Supabase", level: "PostgreSQL Backend", icon: "Supabase" },
      ],
    },
    {
      category: "Development Tools",
      items: [
        { name: "Jupyter Notebook", level: "Interactive Analysis", icon: "Jupyter Notebook" },
        { name: "Git", level: "Version Control", icon: "Git" },
        { name: "GitHub", level: "Code Repositories", icon: "GitHub" },
        { name: "VS Code", level: "IDE Workspaces", icon: "VS Code" },
      ],
    },
  ],
  workflow: [
    {
      step: "01",
      name: "RAW DATA INGESTION",
      icon: "Database",
      description: "Reading CSV/Excel datasets using `pd.read_csv()`, checking shape, data types (`df.info()`), and identifying missing values (`df.isnull().sum()`).",
    },
    {
      step: "02",
      name: "DATA WRANGLING & CLEANING",
      icon: "Filter",
      description: "Dropping rows with invalid IDs, imputing missing columns, stripping unwanted whitespace, parsing date strings into datetime objects, and filtering outliers.",
    },
    {
      step: "03",
      name: "EXPLORATORY DATA ANALYSIS (EDA)",
      icon: "Search",
      description: "Calculating summary metrics (`df.describe()`), group aggregations (`df.groupby()`), mean/median comparisons, and frequency counts for categorical variables.",
    },
    {
      step: "04",
      name: "STATISTICAL CORRELATION",
      icon: "Calculator",
      description: "Building Pearson correlation matrices (`df.corr()`), inspecting variable relationships, and checking coefficient strength across numerical attributes.",
    },
    {
      step: "05",
      name: "STATISTICAL PLOTTING",
      icon: "BarChart3",
      description: "Generating Seaborn distribution KDE plots, bar charts, box plots, and heatmaps with clear titles, axis labels, and color palettes.",
    },
    {
      step: "06",
      name: "REPORTING & INSIGHTS",
      icon: "CheckCircle2",
      description: "Writing clear analytical summaries explaining what the numbers mean, key trends discovered, and potential decision takeaways.",
    },
  ],
  projects: [
    {
      id: "ecommerce-sales-analysis",
      title: "E-Commerce Sales & Customer Analysis",
      subtitle: "Python analysis of 540K+ retail sales transactions, customer cohorts, and revenue trends",
      category: "Sales & Retail Analytics",
      stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      metrics: [
        { label: "Dataset Size", value: "541,909", description: "Total raw invoice records" },
        { label: "Attributes", value: "8 Columns", description: "InvoiceNo, Price, Qty, Date..." },
        { label: "Unique Products", value: "4,207", description: "Catalog items analyzed" },
        { label: "Visual Outputs", value: "8 Charts", description: "Seaborn & Matplotlib plots" },
      ],
      problem:
        "Analyzing real-world online retail transaction data to calculate accurate monthly revenue, identify best-selling inventory stock items, and segment top revenue-contributing customers despite missing customer IDs and cancelled order entries.",
      datasetInfo: {
        name: "Online Retail Dataset",
        source: "UCI Machine Learning Repository",
        records: "541,909 rows",
        features: "InvoiceNo, StockCode, Description, Quantity, InvoiceDate, UnitPrice, CustomerID, Country",
        description:
          "Transactional data containing all orders placed for a UK-based registered online gift store over a 12-month period.",
      },
      dataCleaning: [
        "Removed 135,080 rows where `CustomerID` was missing to enable accurate customer account tracking.",
        "Filtered out negative quantities (`Quantity < 0`) and zero prices corresponding to returns and administrative adjustments.",
        "Created calculated column `Revenue = Quantity * UnitPrice`.",
        "Converted `InvoiceDate` to `datetime64[ns]` and extracted year-month periods for time-series grouping.",
      ],
      edaPoints: [
        "Calculated total revenue generated: $8.91M across cleaned dataset.",
        "Grouped sales by month to trace revenue growth from January through December peak.",
        "Identified top 10 best-selling products by total dollar sales.",
        "Analyzed geographic sales breakdown across domestic UK and international customer accounts.",
      ],
      keyFindings: [
        "Top 10% of customer accounts generated over 45% of total gross sales revenue.",
        "Monthly revenue spiked significantly in Q4 (October - November) due to holiday shopping preparation.",
        "UK domestic sales represented 84% of total transaction volume, while international orders had higher average order values.",
        "Average Order Value (AOV) remained steady at ~$20.80 per transaction across standard weekdays.",
      ],
      businessImpact: [
        "Provides clear visibility into target customer cohorts for loyalty programs.",
        "Helps inventory managers plan stock levels prior to Q4 demand surges.",
        "Identifies low-performing SKUs for catalog optimization.",
      ],
      charts: [
        {
          title: "Monthly Revenue Trend",
          src: "/charts/ecommerce/1_monthly_revenue_trend.png",
          caption: "Line plot tracing monthly revenue from Jan to Dec, showing Q4 seasonal growth.",
        },
        {
          title: "Top 10 Products by Revenue",
          src: "/charts/ecommerce/2_top10_products_revenue.png",
          caption: "Horizontal bar chart ranking the top 10 revenue-generating item descriptions.",
        },
        {
          title: "Revenue Distribution by Category",
          src: "/charts/ecommerce/3_revenue_by_category.png",
          caption: "Distribution of revenue across general product groupings.",
        },
        {
          title: "Orders by Category",
          src: "/charts/ecommerce/4_orders_by_category.png",
          caption: "Comparison of total order count versus total revenue across item lines.",
        },
        {
          title: "Top Customers by Revenue",
          src: "/charts/ecommerce/5_top_customers_revenue.png",
          caption: "Bar plot of top 10 CustomerIDs by cumulative spend.",
        },
        {
          title: "Average Order Value (AOV) Trend",
          src: "/charts/ecommerce/6_average_order_value_trend.png",
          caption: "Monthly fluctuation of mean transaction value.",
        },
        {
          title: "Revenue Distribution & Density",
          src: "/charts/ecommerce/7_revenue_distribution.png",
          caption: "Histogram and KDE curve showing order size spread and skewness.",
        },
        {
          title: "Regional Sales Breakdown",
          src: "/charts/ecommerce/8_regional_sales_performance.png",
          caption: "Geographic sales breakdown comparing domestic vs. international market revenue.",
        },
      ],
      codeSnippets: [
        {
          title: "Data Cleaning & Revenue Calculation (Python)",
          language: "python",
          code: `import pandas as pd

# 1. Ingest dataset
df = pd.read_csv("data/ecommerce.csv", encoding="ISO-8859-1")

# 2. Filter missing CustomerIDs & negative quantities
df_clean = df.dropna(subset=["CustomerID"]).copy()
df_clean = df_clean[(df_clean["Quantity"] > 0) & (df_clean["UnitPrice"] > 0)]

# 3. Feature engineering
df_clean["Revenue"] = df_clean["Quantity"] * df_clean["UnitPrice"]
df_clean["InvoiceDate"] = pd.to_datetime(df_clean["InvoiceDate"])
df_clean["YearMonth"] = df_clean["InvoiceDate"].dt.to_period("M")

# 4. Monthly revenue summary
monthly_rev = df_clean.groupby("YearMonth")["Revenue"].sum().reset_index()
print(monthly_rev.head())`,
        },
        {
          title: "Seaborn Plot Generation (Python)",
          language: "python",
          code: `import matplotlib.pyplot as plt
import seaborn as sns

plt.figure(figsize=(10, 5))
sns.set_theme(style="whitegrid")

ax = sns.barplot(
    data=top_10_products,
    x="Revenue",
    y="Description",
    palette="Blues_r"
)

plt.title("Top 10 Products by Total Revenue ($)", fontsize=13, fontweight="bold")
plt.xlabel("Revenue ($)", fontsize=11)
plt.ylabel("Product Name", fontsize=11)
plt.tight_layout()
plt.savefig("outputs/charts/2_top10_products_revenue.png", dpi=300)
plt.show()`,
        },
      ],
      githubUrl: "https://github.com/Ebinesar91/ecommerce-sales-analysis",
    },
    {
      id: "student-performance-analysis",
      title: "Student Performance Analysis",
      subtitle: "Exploratory data analysis & statistical correlation study of 1,000 student exam scores",
      category: "Educational & Social Analytics",
      stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      metrics: [
        { label: "Sample Size", value: "1,000 Students", description: "Clean tabular dataset" },
        { label: "Variables", value: "8 Attributes", description: "Demographics, prep, scores" },
        { label: "Subject Scores", value: "3 Fields", description: "Math, Reading, Writing" },
        { label: "Visual Plots", value: "8 Charts", description: "Heatmaps & box plots" },
      ],
      problem:
        "Analyzing how test preparation course completion, weekly study habits, and parental education levels correlate with student standardized test scores across Math, Reading, and Writing.",
      datasetInfo: {
        name: "Students Performance in Exams",
        source: "Kaggle Educational Archive",
        records: "1,000 student rows",
        features: "gender, race/ethnicity, parental level of education, lunch, test preparation course, math score, reading score, writing score",
        description:
          "Dataset containing student background attributes and test scores in three core academic subjects.",
      },
      dataCleaning: [
        "Checked dataset for null values (`df.isnull().sum()`); verified 0 missing entries.",
        "Renamed column headers to snake_case for consistent coding style.",
        "Created calculated column `average_score = (math_score + reading_score + writing_score) / 3`.",
        "Grouped score outcomes into performance tiers for categorical analysis.",
      ],
      edaPoints: [
        "Evaluated score distributions for Math, Reading, and Writing using Seaborn KDE plots.",
        "Calculated Pearson correlation coefficients between Math, Reading, and Writing scores.",
        "Compared score averages between students who completed test preparation courses vs. non-completers.",
        "Analyzed score deltas across parental education categories.",
      ],
      keyFindings: [
        "Reading and Writing scores show a strong positive correlation (r = 0.95).",
        "Students who completed the Test Preparation Course scored on average 7.6 points higher overall.",
        "Parental education level shows a steady positive relationship with higher median exam scores.",
        "Math scores demonstrated higher score variance compared to Reading and Writing.",
      ],
      businessImpact: [
        "Highlights test preparation programs as an effective academic intervention tool.",
        "Shows strong interplay between reading comprehension and writing proficiency.",
        "Provides clear data visualizations for academic performance review.",
      ],
      charts: [
        {
          title: "Exam Score Distributions",
          src: "/charts/student/01_score_distribution.png",
          caption: "KDE distribution overlay for Math, Reading, and Writing scores.",
        },
        {
          title: "Average Score by Weekly Study Time",
          src: "/charts/student/02_avg_score_by_studytime.png",
          caption: "Bar chart illustrating mean score differences across study time tiers.",
        },
        {
          title: "Study Time vs. Exam Score Scatter",
          src: "/charts/student/03_studytime_vs_score.png",
          caption: "Scatter plot with regression trendline showing positive study time correlation.",
        },
        {
          title: "Pearson Correlation Matrix",
          src: "/charts/student/04_correlation_heatmap.png",
          caption: "Heatmap displaying correlation matrix between subject scores and average score.",
        },
        {
          title: "Subject Performance Comparison",
          src: "/charts/student/05_subject_performance.png",
          caption: "Box plot comparing score distributions, medians, and IQRs across subjects.",
        },
        {
          title: "Test Prep Course Outcome Comparison",
          src: "/charts/student/06_performance_group_comparison.png",
          caption: "Grouped bar chart showing score gains for students completing test prep.",
        },
        {
          title: "Absences vs. Composite Score",
          src: "/charts/student/07_absences_vs_score.png",
          caption: "Analysis showing inverse relationship between school absences and final score averages.",
        },
        {
          title: "Parental Education Impact",
          src: "/charts/student/08_parental_education_impact.png",
          caption: "Box/violin plot of student performance grouped by parental degree level.",
        },
      ],
      codeSnippets: [
        {
          title: "Correlation Matrix & Heatmap Generation (Python)",
          language: "python",
          code: `import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Load dataset
df = pd.read_csv("data/students_performance.csv")

# Calculated average score
df["average_score"] = df[["math score", "reading score", "writing score"]].mean(axis=1)

# Compute correlation matrix
corr = df[["math score", "reading score", "writing score", "average_score"]].corr()

# Generate heatmap
plt.figure(figsize=(7, 5))
sns.heatmap(corr, annot=True, cmap="Blues", fmt=".2f", linewidths=0.5)
plt.title("Subject Score Pearson Correlation Matrix")
plt.tight_layout()
plt.savefig("outputs/charts/04_correlation_heatmap.png", dpi=300)
plt.show()`,
        },
      ],
      githubUrl: "https://github.com/Ebinesar91/student-performance-analysis",
    },
  ],
  certifications: [
    {
      title: "Data Analytics with Python",
      issuer: "NPTEL (National Programme on Technology Enhanced Learning)",
      date: "Successfully Completed",
      badge: "Analytics Core",
      description: "Formal certification covering Python data manipulation, Pandas DataFrames, statistical summary metrics, and Matplotlib plotting.",
    },
    {
      title: "Data Structures & Algorithms using Java",
      issuer: "NPTEL",
      date: "Successfully Completed",
      badge: "CS Core",
      description: "Rigorous coursework in computational complexity, arrays, linked lists, trees, and algorithmic problem solving.",
    },
    {
      title: "Generative AI Foundations",
      issuer: "AWS Academy",
      date: "Certified",
      badge: "AI & Cloud",
      description: "Foundational concepts of generative AI models, prompt design, and machine learning cloud services.",
    },
    {
      title: "Python Programming",
      issuer: "Red Hat Academy",
      date: "Certified",
      badge: "Programming",
      description: "Core Python syntax, object-oriented programming (OOP), file I/O, and modular programming concepts.",
    },
  ],
  education: [
    {
      institution: "GRT Institute of Engineering and Technology",
      degree: "B.E. Computer Science and Engineering",
      period: "2024 – Present",
      expectedGraduation: "Expected Graduation: 2028",
      details: "Undergraduate computer science studies covering data structures, database management systems (DBMS), Python programming, and statistics.",
    },
    {
      institution: "NxtWave – CCBP 4.0",
      degree: "Full Stack Development & Data Program",
      period: "2024 – Present",
      expectedGraduation: "4-Year Skill Building Program",
      details: "Structured technical training focused on database design, SQL querying, software fundamentals, and practical project building.",
    },
  ],
  experience: [
    {
      company: "AppDost – Complete IT Solutions",
      role: "Web Development Intern",
      period: "Present",
      description: "Gaining web development experience while maintaining my primary career focus on Python data analytics and database management.",
    },
  ],
  achievements: [
    {
      title: "NPTEL Winter Internship Selection",
      context: "Merit-Based Selection",
      description: "Selected for the NPTEL Winter Internship program based on academic performance and NPTEL course achievements.",
    },
    {
      title: "College-Level Hackathon Winner",
      context: "1st Place Winner",
      description: "Won 1st place in college competitive hackathon and awarded internship opportunity.",
    },
  ],
};
