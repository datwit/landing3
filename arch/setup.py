import setuptools


with open("README.md") as fp:
    long_description = fp.read()


setuptools.setup(
    name="landing_stack",
    version="0.0.1",

    description="Landing CDK Python app",
    long_description=long_description,
    long_description_content_type="text/markdown",

    author="ybenitezf@gmail.com",

    package_dir={"": "landing_stack"},
    packages=setuptools.find_packages(where="landing_stack"),

    install_requires=[
        "aws-cdk-lib==2.0.0-rc.9",
        "constructs>=10.0.0,<11.0.0",
        "python-dotenv",
        "ybf-constructs @ https://github.com/datwit/ybf-constructs/releases/download/v0.0.2/ybf_constructs-0.0.2-py2.py3-none-any.whl",
        "datwit-contact-form @ https://github.com/datwit/contact-form-manager/releases/download/v0.0.6/datwit_contact_form-0.0.6-py2.py3-none-any.whl"
    ],

    python_requires=">=3.6",

    classifiers=[
        "Development Status :: 4 - Beta",

        "Intended Audience :: Developers",

        "Programming Language :: JavaScript",
        "Programming Language :: Python :: 3 :: Only",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",

        "Topic :: Software Development :: Code Generators",
        "Topic :: Utilities",

        "Typing :: Typed",
    ],
)
