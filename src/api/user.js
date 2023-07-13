import supabase from "./supabase";

export const getUsersById = async (id) => {
  try {
    const { data, error } = await supabase.from("users").select("id").eq("id", id);

    if (error) {
      throw new Error(error.message);
    } else {
      return data;
    }
  } catch (error) {
    console.error("Failed to retrieve users by ID:", error.message);
    // Perform any necessary actions on error
  }
};

export const getUsersByCreatedAt = async () => {
  try {
    const { data, error } = await supabase.from("users").select("created_at");

    if (error) {
      throw new Error(error.message);
    } else {
      return data;
    }
  } catch (error) {
    console.error("Failed to retrieve users by created_at:", error.message);
    // Perform any necessary actions on error
  }
};

export const getUsersByUsername = async () => {
  try {
    const { data, error } = await supabase.from("users").select("username");

    if (error) {
      throw new Error(error.message);
    } else {
      return data;
    }
  } catch (error) {
    console.error("Failed to retrieve users by username:", error.message);
    // Perform any necessary actions on error
  }
};

export const getAllUsers = async () => {
  try {
    const { data, error } = await supabase.from("users").select("*");

    if (error) {
      throw new Error(error.message);
    } else {
      return data;
    }
  } catch (error) {
    console.error("Failed to retrieve all users:", error.message);
    // Perform any necessary actions on error
  }
};
