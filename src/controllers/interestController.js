import { interestControl, userControl } from "../models/index.js";
import fs from "fs";

const getInterestAll = async (req, res) => {
  try {
    const respon = await interestControl.findAll();
    res.status(200).json(respon);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getInterestAllById = async (req, res) => {
  try {
    const respon = await interestControl.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!respon) {
      return res.status(401).json({ massage: "id Tidak Terdaftar!" });
    } else {
      res.status(200).json(respon);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const getInterestAllByUserId = async (req, res) => {
  try {
    const respon = await interestControl.findAll({
      include: [
        {
          model: userControl,
          where: {
            id: req.params.id,
          },
        },
      ],
    });

    if (!respon) {
      return res.status(401).json({ massage: "id Tidak Terdaftar!" });
    } else {
      res.status(200).json(respon);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const createInterest = async (req, res) => {
  const interestData = req.body;

  if (!interestData || interestData.length === 0) {
    return res.status(404).json({
      massage: "interest blm di isii",
    });
  }

  try {
    const newInterest = await interestControl.bulkCreate(interestData);
    res.status(201).json(newInterest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateInterest = async (req, res) => {
  const interestData = {
    user_id: req.body.user_id,
    my_interest: req.body.my_interest,
  };
  try {
    const newInterest = await interestControl.update(interestData, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json(newInterest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteInterestById = async (req, res) => {
  try {
    const respon = await interestControl.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(respon);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export {
  getInterestAll,
  getInterestAllById,
  getInterestAllByUserId,
  createInterest,
  updateInterest,
  deleteInterestById,
};
