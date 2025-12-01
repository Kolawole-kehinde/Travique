"use client";

import { useState } from "react";
import { BUDGETS, GROUP_TYPES, INTERESTS, TRAVEL_STYLES } from "../type/travelForm";

const COUNTRIES = [
  { code: "HR", label: "Croatia", emoji: "🇭🇷" },
  { code: "NG", label: "Nigeria", emoji: "🇳🇬" },
  { code: "AU", label: "Australia", emoji: "🇦🇺" },
  { code: "FR", label: "France", emoji: "🇫🇷" },
  { code: "KE", label: "Kenya", emoji: "🇰🇪" },
];

interface Option {
  value: string;
  label: string;
}

interface SelectDropdownProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
}

export default function TripForm() {
  const [country, setCountry] = useState("");
  const [duration, setDuration] = useState("");
  const [groupType, setGroupType] = useState("");
  const [travelStyle, setTravelStyle] = useState("");
  const [interest, setInterest] = useState("");
  const [budget, setBudget] = useState("");

  return (
    <div className="w-full flex justify-center bg-gray-50 py-10">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow p-6 space-y-6">
        
        {/* COUNTRY */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Country</label>
          <div className="relative">
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 appearance-none bg-white"
            >
              <option value="">Select a country</option>
              {COUNTRIES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.emoji} {c.label}
                </option>
              ))}
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">⌄</span>
          </div>
        </div>

        {/* DURATION */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Duration</label>
          <input
            type="number"
            placeholder="Enter number of days (e.g., 5, 12)"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700"
          />
        </div>

        <SelectDropdown
          label="Group Type"
          placeholder="Select a group type"
          value={groupType}
          onChange={setGroupType}
          options={GROUP_TYPES}
        />

        <SelectDropdown
          label="Travel style"
          placeholder="Select your travel style"
          value={travelStyle}
          onChange={setTravelStyle}
          options={TRAVEL_STYLES}
        />

        <SelectDropdown
          label="Interests"
          placeholder="Select your interest"
          value={interest}
          onChange={setInterest}
          options={INTERESTS}
        />

        <SelectDropdown
          label="Budget Estimate"
          placeholder="Select your budget preference"
          value={budget}
          onChange={setBudget}
          options={BUDGETS}
        />

        {/* MAP BOX */}
        <div>
          <label className="text-sm font-medium text-gray-700">Location on map</label>
          <div className="border border-gray-300 h-48 rounded-xl overflow-hidden mt-2">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=Melbourne&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-medium hover:bg-blue-700 transition">
          Generate a trip
        </button>
      </div>
    </div>
  );
}

function SelectDropdown({
  label,
  placeholder,
  value,
  onChange,
  options,
}: SelectDropdownProps) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 appearance-none bg-white"
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">⌄</span>
      </div>
    </div>
  );
}
