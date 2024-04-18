export const calculateAge = (dob: any) => {
    let dobVal = new Date(dob);
    let today = new Date(Date.now());
    let diff = dobVal.getTime() - today.getTime();
    let age_dt = new Date(diff)
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}