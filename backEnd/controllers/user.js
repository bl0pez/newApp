


const profile = (req, res) => {

    const { veterinary } = req;

    console.log(req.veterinary);

    res.json({ 
        message: 'Profile',
        veterinary
     });
}


export {
    profile,
}