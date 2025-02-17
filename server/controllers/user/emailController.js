import Email from "../../model/userEmail.js";

// Hàm tạo email từ tên người dùng
const generateEmailFromUsername = (username) => {
  const sanitizedUsername = username.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return `${sanitizedUsername}@temp-mail.com`;
};

// Hàm tạo email mới
const createEmail = async (req, res) => {
  try {
    const { username } = req.body;
    if (!username) {
      return res.status(400).json({ success: false, message: "Thiếu tên người dùng" });
    }

    let emailAddress = generateEmailFromUsername(username);
    let isUnique = false;
    let counter = 1;

    // Kiểm tra trùng lặp email
    while (!isUnique) {
      const existingEmail = await Email.findOne({ address: emailAddress });
      if (!existingEmail) {
        isUnique = true;
      } else {
        emailAddress = `${generateEmailFromUsername(username)}${counter}@temp-mail.com`;
        counter++;
      }
    }

    const newEmail = new Email({ address: emailAddress });
    await newEmail.save();

    res.status(201).json({ success: true, email: emailAddress });
  } catch (error) {
    res.status(500).json({ success: false, message: "Lỗi tạo email", error: error.message });
  }
};

export { createEmail };
