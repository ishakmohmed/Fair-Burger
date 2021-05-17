import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "../components/TabBar";
import OrderScreen from "../screens/OrderScreen";
import QueueScreen from "../screens/QueueScreen";
import AddFoodScreen from "../screens/AddFoodScreen";
import DeleteFoodScreen from "../screens/DeleteFoodScreen";
import LogoutScreen from "../screens/LogoutScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name="queue"
        component={QueueScreen}
        initialParams={{ icon: "people" }}
      />
      <Tab.Screen
        name="order"
        component={OrderScreen}
        initialParams={{ icon: "grading" }}
      />
      <Tab.Screen
        name="+food"
        component={AddFoodScreen}
        initialParams={{ icon: "fastfood" }}
      />
      <Tab.Screen
        name="-food"
        component={DeleteFoodScreen}
        initialParams={{ icon: "no-food" }}
      />
      <Tab.Screen
        name="logout"
        component={LogoutScreen}
        initialParams={{ icon: "logout" }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
