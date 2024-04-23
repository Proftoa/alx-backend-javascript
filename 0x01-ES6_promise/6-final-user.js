// Function to simulate asynchronous operation of saving profile data
function saveProfile(firstName, lastName, fileName) {
  return new Promise((resolve, reject) => {
    // Simulating some asynchronous operation
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve(`Profile for ${firstName} ${lastName} saved to ${fileName}`);
      } else {
        reject(new Error(`Error saving profile for ${firstName} ${lastName}`));
      }
    }, 1000); // Simulating delay
  });
}

// Function to simulate asynchronous operation of uploading profile picture
function uploadProfilePicture(firstName, lastName) {
  return new Promise((resolve, reject) => {
    // Simulating some asynchronous operation
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve(`Profile picture uploaded for ${firstName} ${lastName}`);
      } else {
        reject(new Error(`Error uploading profile picture for ${firstName} ${lastName}`));
      }
    }, 1500); // Simulating delay
  });
}

// Function to handle profile signup
async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    // Call both async functions concurrently
    const saveProfilePromise = saveProfile(firstName, lastName, fileName);
    const uploadProfilePicturePromise = uploadProfilePicture(firstName, lastName);

    // Wait for all promises to settle
    const [saveResult, uploadResult] = await Promise.allSettled([saveProfilePromise, uploadProfilePicturePromise]);

    // Construct and return the result array
    return [
      { status: saveResult.status, value: saveResult.status === 'fulfilled' ? saveResult.value : saveResult.reason },
      { status: uploadResult.status, value: uploadResult.status === 'fulfilled' ? uploadResult.value : uploadResult.reason }
    ];
  } catch (error) {
    // If any error occurs during the process, return an array with the error details
    return [
      { status: 'rejected', value: error }
    ];
  }
}

// Example usage:
handleProfileSignup('John', 'Doe', 'profile.txt')
  .then(result => console.log(result))
  .catch(error => console.error(error));

