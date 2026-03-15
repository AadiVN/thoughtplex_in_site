import React from 'react';
import TrainingHeader from '../../components/TrainingHeader';
import Footer from '../../components/Footer';

const TrainingCurriculum = () => {
  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen flex flex-col">
      <TrainingHeader />

      <section className="py-16 px-5 bg-gradient-to-r from-blue-800 to-blue-600 text-center text-white">
        <h1 className="text-4xl font-bold">AI & Machine Learning Curriculum</h1>
        <p className="mt-4 text-lg opacity-90">Comprehensive syllabus designed for industry readiness</p>
      </section>

      <section className="py-16 px-5 container mx-auto max-w-5xl flex-grow">
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-600">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Module 1 — Python Foundations</h2>
            <ul className="space-y-3">
              {['Data Types and Operators', 'Loops and Conditional Statements', 'Functions and File Operations', 'Object Oriented Programming', 'NumPy, Pandas, Matplotlib'].map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-600">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Module 2 — Machine Learning</h2>
            <ul className="space-y-3">
              {['Gradient Descent', 'Linear Regression', 'Logistic Regression', 'Decision Trees', 'Random Forest', 'Support Vector Machine', 'KNN', 'DBScan', 'Hierarchical Clustering'].map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-600">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Module 3 — Deep Learning</h2>
            <ul className="space-y-3">
              {['Neural Networks', 'Backpropagation', 'CNN for Image Processing', 'Recurrent Neural Networks', 'LSTM Networks', 'TensorFlow & Keras'].map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-600">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Module 4 — Natural Language Processing</h2>
            <ul className="space-y-3">
              {['Text Processing', 'Stemming', 'Lemmatization', 'Cosine Similarity', 'Sentiment Analysis', 'Word2Vec, Spacy, Stanza'].map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrainingCurriculum;
