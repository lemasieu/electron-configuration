document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const resultDiv = document.getElementById('result');
    const elementListDiv = document.getElementById('elementList');

    let elementsData = [];

    // Tải dữ liệu từ file data.json
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.elements && Array.isArray(data.elements)) {
                elementsData = data.elements;
            } else if (Array.isArray(data)) {
                elementsData = data;
            } else {
                console.error('Dữ liệu JSON không đúng định dạng.');
                resultDiv.innerHTML = '<p style="color: #cf6679;">Lỗi: Dữ liệu không hợp lệ.</p>';
                return;
            }
            renderElementList(elementsData);
            if (elementsData.length > 0) {
                displayElementInfo(elementsData[0]);
            }
        })
        .catch(error => {
            console.error('Lỗi tải dữ liệu:', error);
            resultDiv.innerHTML = `<p style="color: #cf6679;">Không thể tải dữ liệu. Vui lòng kiểm tra file <strong>data.json</strong>.</p>`;
        });

    // Hàm hiển thị danh sách nguyên tố
    function renderElementList(elements) {
        elementListDiv.innerHTML = '';
        if (elements.length === 0) {
            elementListDiv.innerHTML = '<p style="color: #888; text-align: center; grid-column: 1/-1;">Không tìm thấy nguyên tố nào.</p>';
            return;
        }
        elements.forEach(element => {
            const item = document.createElement('div');
            item.className = 'element-item';
            item.innerHTML = `
                <div class="symbol">${element.symbol}</div>
                <div class="number">${element.number}</div>
                <div class="name">${element.name}</div>
            `;
            item.addEventListener('click', () => {
                displayElementInfo(element);
            });
            elementListDiv.appendChild(item);
        });
    }

    // Hàm hiển thị chi tiết nguyên tố
    function displayElementInfo(element) {
        const fullConfig = element.electron_configuration || 'Chưa có dữ liệu';
        const semanticConfig = element.electron_configuration_semantic || 'Chưa có dữ liệu';
        const shells = element.shells ? element.shells.join(', ') : 'Chưa có dữ liệu';

        resultDiv.innerHTML = `
            <h2>${element.name} (${element.symbol}) - Số hiệu: ${element.number}</h2>
            <p><strong>Cấu hình đầy đủ:</strong> <span style="color: #bb86fc;">${fullConfig}</span></p>
            <p><strong>Cấu hình rút gọn:</strong> <span style="color: #bb86fc;">${semanticConfig}</span></p>
            <p><strong>Phân bố theo lớp (K, L, M, ...):</strong> ${shells}</p>
        `;
    }

    // Hàm tìm kiếm mở rộng
    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        if (query === '') {
            renderElementList(elementsData);
            if (elementsData.length > 0) {
                displayElementInfo(elementsData[0]);
            } else {
                resultDiv.innerHTML = '<p>Vui lòng nhập tên, ký hiệu, số hiệu hoặc cấu hình electron.</p>';
            }
            return;
        }

        // Chuẩn hóa query: loại bỏ khoảng trắng thừa để so sánh linh hoạt
        const normalizedQuery = query.replace(/\s/g, '');

        const filtered = elementsData.filter(element => {
            // 1. Tìm theo tên, ký hiệu, số hiệu
            const nameMatch = element.name.toLowerCase().includes(query);
            const symbolMatch = element.symbol.toLowerCase().includes(query);
            const numberMatch = element.number.toString() === query;

            // 2. Tìm theo cấu hình đầy đủ (loại bỏ khoảng trắng để so khớp)
            const fullConfig = element.electron_configuration ? element.electron_configuration.toLowerCase().replace(/\s/g, '') : '';
            const fullMatch = fullConfig.includes(normalizedQuery);

            // 3. Tìm theo cấu hình rút gọn (loại bỏ khoảng trắng và dấu ngoặc vuông? Có thể giữ nguyên)
            const semanticConfig = element.electron_configuration_semantic ? element.electron_configuration_semantic.toLowerCase().replace(/\s/g, '') : '';
            const semanticMatch = semanticConfig.includes(normalizedQuery);

            // 4. Tìm kiếm chính xác chuỗi có dấu cách (cho trường hợp người dùng nhập đúng cú pháp)
            const exactFullMatch = element.electron_configuration && element.electron_configuration.toLowerCase().includes(query);
            const exactSemanticMatch = element.electron_configuration_semantic && element.electron_configuration_semantic.toLowerCase().includes(query);

            return nameMatch || symbolMatch || numberMatch || fullMatch || semanticMatch || exactFullMatch || exactSemanticMatch;
        });

        if (filtered.length === 0) {
            resultDiv.innerHTML = `<p>Không tìm thấy nguyên tố nào phù hợp với "<strong>${query}</strong>".</p>`;
            renderElementList([]);
        } else {
            renderElementList(filtered);
            displayElementInfo(filtered[0]);
        }
    }

    // Gán sự kiện
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Thêm gợi ý cho placeholder
    searchInput.placeholder = 'Nhập tên, ký hiệu, số hiệu hoặc cấu hình e (vd: 1s2 2s2)';
});