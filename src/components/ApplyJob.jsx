"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSearchParams } from "next/navigation";
import { validateResumeFile, uploadResume } from "../app/services/uploadService.js";
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';

export default function ApplyJob() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);


    const searchParams = useSearchParams();
    const selectedPosition = searchParams.get("position") || "";

    const [uploading, setUploading] = useState(false);
    const [resumeUrl, setResumeUrl] = useState("");

    const router = useRouter();


    const api_url = process.env.NEXT_PUBLIC_API_BASE_URL_DEV_UPLOAD;

    const [form, setForm] = useState({
        name: "",
        email: "",
        experience: "",
        ctc: "",
        ectc: "",
        notice_period: "",
        position: selectedPosition,
        phone: "",
        resume: null
    });


    const handleFileUpload = async (e) => {
        const file = e.target.files[0];

        const validation = validateResumeFile(file);

        if (!validation.isValid) {
            toast.error(validation.error);
            setErrors({ ...errors, resume: validation.error });
            return;
        }

        setUploading(true);

        const result = await uploadResume(file);

        setUploading(false);

        if (result.success) {
            setForm({ ...form, resume: file });
            setResumeUrl(result.url);
            toast.success("Resume uploaded successfully!");
        } else {
            toast.error(result.error || "Resume upload failed.");
            setErrors({ ...errors, resume: result.error });
        }
    };


    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!/^[0-9]{10}$/.test(form.phone)) {
            newErrors.phone = "Phone number must be 10 digits only.";
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Enter a valid email address.";
        }

        const positiveNumber = /^[0-9]+(\.[0-9]+)?$/;

        if (!positiveNumber.test(form.ctc)) newErrors.ctc = "CTC must be a positive number.";
        if (!positiveNumber.test(form.ectc)) newErrors.ectc = "Expected CTC must be a positive number.";
        if (!positiveNumber.test(form.experience)) newErrors.experience = "Experience must be a positive number.";

        if (!form.position) newErrors.position = "Please select a job position.";

        if (!form.resume) {
            newErrors.resume = "Please upload your resume.";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            toast.error("Please correct the highlighted errors.");
            return false;
        }

        return true;
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        try {
            const payload = {
                name: form.name,
                email: form.email,
                experience: form.experience,
                ctc: form.ctc,
                ectc: form.ectc,
                notice_period: form.notice_period,
                position: form.position,
                phone: form.phone,
                resume: resumeUrl
            };

            const response = await fetch(`${api_url}/hg-apply`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (!response.ok) {
                toast.error(data.message || "Failed to submit form");
                return;
            }

            toast.success("Application submitted successfully!");
            setTimeout(() => router.push("/careers"), 800);

        } catch (error) {
            console.error("Form submission error:", error);
            toast.error(error.message || "Something went wrong");
        }
    };




    // ---------------- INPUT HANDLER ---------------- //
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: "" });
        }
    };

    return (
        <>
            {/* HERO SECTION */}
            <section id="hero" className="hero aboutUsHero section dark-background">
                <Image
                    src="/assets/images/contact_slider.jpg"
                    alt="Apply Job"
                    fill
                    style={{ objectFit: "cover" }}
                    data-aos="fade-in"
                />
                <div className="container">
                    <div className="row justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
                        <div className="col-xl-7 col-lg-8">
                            <h2 className="titleManSlide">Ready to sky-rocket your Career?</h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* FORM SECTION */}
            <section id="contact" className="contact bgIcons section contactFromBlog pb-0">
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contactUSBlog" style={{ background: "#0c112b" }}>
                                <p style={{ color: "#fff" }}>
                                    Please provide as much information as possible and we'll contact you within 24 hours for the next steps.
                                </p>

                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        {/* IMAGE */}
                                        <div className="col-md-6">
                                            <Image
                                                src={`/assets/images/jobapply.png`}
                                                alt="Job Apply"
                                                width={450}
                                                height={450}
                                                className="img-fluid"
                                            />
                                        </div>

                                        {/* FORM FIELDS */}
                                        <div className="col-md-6">

                                            {/* NAME */}
                                            <div className="mb-3">
                                                <label className="text-white">Name <span className="text-danger">*</span>  </label>
                                                <input type="text" className="form-control" name="name" value={form.name} onChange={handleChange} required />
                                            </div>

                                            {/* EMAIL */}
                                            <div className="mb-3">
                                                <label className="text-white">Email <span className="text-danger">*</span> </label>
                                                <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} required />
                                                {errors.email && <p className="text-danger">{errors.email}</p>}
                                            </div>

                                            {/* EXPERIENCE */}
                                            <div className="mb-3">
                                                <label className="text-white">Years of Experience <span className="text-danger">*</span> </label>
                                                <input type="text" className="form-control" name="experience" value={form.experience} onChange={handleChange} required />
                                                {errors.experience && <p className="text-danger">{errors.experience}</p>}
                                            </div>

                                            {/* CTC */}
                                            <div className="mb-3">
                                                <label className="text-white">CTC <span className="text-danger">*</span> </label>
                                                <input type="text" className="form-control" name="ctc" value={form.ctc} onChange={handleChange} required />
                                                {errors.ctc && <p className="text-danger">{errors.ctc}</p>}
                                            </div>

                                            {/* ECTC */}
                                            <div className="mb-3">
                                                <label className="text-white">Expected CTC (ECTC) <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" name="ectc" value={form.ectc} onChange={handleChange} required />
                                                {errors.ectc && <p className="text-danger">{errors.ectc}</p>}
                                            </div>

                                            {/* NOTICE PERIOD */}
                                            <div className="mb-3">
                                                <label className="text-white">Notice Period <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" name="notice_period" value={form.notice_period} onChange={handleChange} required />
                                                {errors.notice_period && <p className="text-danger">{errors.notice_period}</p>}
                                            </div>

                                            {/* JOB POSITION */}
                                            <div className="mb-3">
                                                <label className="text-white">Apply For <span className="text-danger">*</span></label>
                                                <select className="form-control" name="position" value={form.position} onChange={handleChange} required>
                                                    <option value="">Select Position</option>
                                                    <option value="UI/UX Designer (1)">UI/UX Designer</option>
                                                    <option value="Business Analyst (2)">Business Analyst</option>
                                                    <option value="Full Stack Developer (3)">Full Stack Developer</option>
                                                    <option value="Quality Analyst (2)">Quality Analyst</option>
                                                    <option value="Mobile Developer (1)">Mobile Developer</option>
                                                </select>
                                                {errors.position && <p className="text-danger">{errors.position}</p>}
                                            </div>

                                            {/* PHONE */}
                                            <div className="mb-3">
                                                <label className="text-white">Phone Number <span className="text-danger">*</span></label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="phone"
                                                    value={form.phone}
                                                    onChange={(e) => {
                                                        const value = e.target.value.replace(/\D/g, ""); // remove non-digits
                                                        if (value.length <= 10) {
                                                            setForm({ ...form, phone: value });
                                                        }
                                                    }}
                                                    maxLength={10}
                                                    required
                                                />

                                                {errors.phone && <p className="text-danger">{errors.phone}</p>}
                                            </div>

                                            <div className="d-flex justify-content-between align-items-center">

                                                {/* Resume Upload */}
                                                <div style={{ width: "65%" }}>
                                                    <label className="text-white">Upload Resume <span className="text-danger">*</span></label>
                                                    <input
                                                        type="file"
                                                        className="form-control"
                                                        accept="application/pdf"
                                                        onChange={handleFileUpload}
                                                    />

                                                    {/* Show only ONE message */}
                                                    {uploading ? (
                                                        <p className="text-info">Uploading... Please wait.</p>
                                                    ) : errors.resume ? (
                                                        <p className="text-danger">{errors.resume}</p>
                                                    ) : resumeUrl ? (
                                                        <p className="text-success">Uploaded Successfully ✓</p>
                                                    ) : null}


                                                </div>

                                                {/* Apply Button */}
                                                <div>
                                                    <button className="btn btn-primary mt-4" type="submit">
                                                        Apply Now
                                                    </button>
                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
