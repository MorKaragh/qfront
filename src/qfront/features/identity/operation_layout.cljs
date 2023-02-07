(ns qfront.features.identity.operation-layout
  (:require [qfront.features.identity.operation-plank :refer [operation-plank]]
            [re-frame.core :as rf]))

(defn identity-operation-layout []
  [:div {:id "operation-layout" :class "right-part-section"}
   (for [i @(rf/subscribe [:selected])]
     ^{:key (str "oper-" (:id i))} [operation-plank i])])
