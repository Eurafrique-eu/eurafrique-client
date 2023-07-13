import supabase from "./supabase";

export const signIn = async (email, password) => {
  try {
    const { user, error } = await supabase.auth.signIn({ email, password });

    if (error) {
      throw new Error(error.message);
    } else {
      console.log("Sign-in successful");
      // Perform any necessary actions after successful sign-in
    }
  } catch (error) {
    console.error("Sign-in failed:", error.message);
    // Perform any necessary actions on sign-in failure
  }
};

export const updatePassword = async (email, password) => {
  try {
    const { error } = await supabase.auth.update({ email, password });

    if (error) {
      throw new Error(error.message);
    } else {
      console.log("Password updated successfully");
      // Perform any necessary actions after successful password update
    }
  } catch (error) {
    console.error("Password update failed:", error.message);
    // Perform any necessary actions on password update failure
  }
};
