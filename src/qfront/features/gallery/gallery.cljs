(ns qfront.features.gallery.gallery
  (:require [reagent.core :as r]
            [ajax.core :as ajax]
            [re-frame.core :as rf]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<! >! chan alts!]]
            [qfront.features.gallery.uploader :as upl]
            [qfront.features.gallery.imgbox :as ib]))

(defn gallery [on-image-click]
  (fn [] 
    [:div.gallery-root
     [upl/file-upload]
     (for [i @(rf/subscribe [:shown-images])]
       ^{:key (str "img-" i)} [ib/image i on-image-click])]))