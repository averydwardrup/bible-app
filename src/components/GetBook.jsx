import React, { useState, useEffect } from "react";

const GetBook = () => {
    return (
        <div className="container is-max-desktop p-5">
            <div className="columns">
                <div className="column is-one-third is-block has-text-left">
                    <label className="is-block">Choose a Book</label>
                    <div className="mt-2 select is-rounded is-primary">
                        <select>
                            <option>Genesis</option>
                            <option>Exodus</option>
                            <option>Leviticus</option>
                            <option>Numbers</option>
                            <option>Deuteronomy</option>
                        </select>
                    </div>

                    <label className="is-block mt-4">Choose a Chapter</label>
                    <div className="mt-2 select is-rounded is-primary">
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>
                <div className="column is-two-thirds">
                    <div className="skeleton-lines">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetBook;
