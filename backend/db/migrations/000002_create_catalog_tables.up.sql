CREATE TABLE modules (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    mentor_name VARCHAR(255) NOT NULL,
    rating DECIMAL(3, 1) NOT NULL DEFAULT 0.0,
    lessons_count INTEGER NOT NULL DEFAULT 0,
    image_url TEXT NOT NULL,
    category VARCHAR(100),
    price VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE mentors (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    rating DECIMAL(3, 1) NOT NULL DEFAULT 0.0,
    image_url TEXT NOT NULL,
    status VARCHAR(100) NOT NULL,
    price_start VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Seed Data for modules
INSERT INTO modules (id, title, mentor_name, rating, lessons_count, image_url, category, price) VALUES
('MODULE_01', 'Mastering Public Speaking', 'Andhika Pratama', 4.9, 12, 'https://images.unsplash.com/photo-1475721028314-3905c1d3c054?auto=format&fit=crop&q=80&w=800', 'AKSES PREMIUM', NULL),
('MODULE_02', 'Advanced Audio Mixing', 'Raka Aditya', 4.8, 24, 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800', 'AKSES PREMIUM', NULL),
('MODULE_03', 'Pro Live Streaming Setup', 'Budi Santoso', 5.0, 18, 'https://images.unsplash.com/photo-1516280440502-c12e1431ff47?auto=format&fit=crop&q=80&w=800', 'LIVE CLASS', 'RP 100.000'),
('MODULE_04', 'The Art of Voice Acting', 'Maya Putri', 4.9, 15, 'https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?auto=format&fit=crop&q=80&w=800', 'AKSES PREMIUM', NULL);

-- Seed Data for mentors
INSERT INTO mentors (id, name, role, rating, image_url, status, price_start) VALUES
('MENTOR_01', 'Aris Budiman', 'Senior Broadcaster', 4.9, 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', 'AKSES PREMIUM', NULL),
('MENTOR_02', 'Sarah Wijaya', 'Audio Engineer', 4.8, 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', 'AKSES PREMIUM', NULL),
('MENTOR_03', 'Budi Santoso', 'Streaming Specialist', 5.0, 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', 'LIVE CLASS', 'RP 100.000'),
('MENTOR_04', 'Maya Putri', 'Voice Artist', 4.9, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', 'AKSES PREMIUM', NULL);
