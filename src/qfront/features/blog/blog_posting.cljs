(ns qfront.features.blog.blog-posting 
  (:require [reagent.core :as r]
            [qfront.features.uploader.uploader :as upl]))

(def wrap-style
  {})

(defn post-adder []
  (let [state (r/atom {})]
    (fn []
      [:div.post-editor
       [:label {:for "blog-header"} "Заголовок"]
       [:input {:type "text"
                :placeholder "header"
                :name "blog-header"}]
       [:label {:for "blog-text"} "Текст"]
       [:textarea {:rows 30 :cols 100 :name "blog-text"}]
       [:label {:for "file"} "Файл"]
       [:input {:type "file" :name "blog-file"}]
       [upl/file-upload]])))