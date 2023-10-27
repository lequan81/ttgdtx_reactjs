import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

export function FAQ() {
  return (
    <div className="w-full mt-12 mb-6 px-4 sm:px-6 lg:px-8 mx-auto dark:bg-gray-900 bg-gray-100">
      <div className="max-w-5xl mx-auto mb-10">
        <h2 className="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white text-gray-900 select-none mt-4">
          Bạn đang thắc mắc rằng...
        </h2>
      </div>

      <div className="max-w-4xl mx-auto divide-y divide-gray-200 dark:divide-gray-700 cursor-default select-none">
        <div className="py-8 first:pt-4">
          <div className="flex gap-x-5">
            <QuestionMarkCircleIcon className="flex-shrink-0 mt-1 w-7 h-7 text-gray-500" />
            <div>
              <h3 className="md:text-lg font-semibold text-gray-800 dark:text-gray-100">
                Khi nào tôi có thể hủy khóa học?
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Bạn có thể hủy khóa học bất cứ lúc nào bạn thích. Tuy nhiên
                chúng tôi sẽ rất vui nếu bạn có thể cho chúng tôi xin một số
                nhận xét về khóa học.
              </p>
            </div>
          </div>
        </div>

        <div className="py-8 first:pt-4">
          <div className="flex gap-x-5">
            <QuestionMarkCircleIcon className="flex-shrink-0 mt-1 w-7 h-7 text-gray-500" />
            <div>
              <h3 className="md:text-lg font-semibold text-gray-800 dark:text-gray-100">
                Làm sao để biết tôi đã đăng ký thành công?
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Khi bạn đã xác nhận email thông báo đăng ký thành công, hệ thống
                sẽ gửi email xác nhận đến địa chỉ email bạn đã đăng ký trong
                vòng từ 5 phút đến 1 tiếng
              </p>
            </div>
          </div>
        </div>

        <div className="py-8 first:pt-4">
          <div className="flex gap-x-5">
            <QuestionMarkCircleIcon className="flex-shrink-0 mt-1 w-7 h-7 text-gray-500" />
            <div>
              <h3 className="md:text-lg font-semibold text-gray-800 dark:text-gray-100">
                Khi nào tôi sẽ nhận được phản hồi?
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Sau khi bạn nhận được email xác nhận đăng ký thành công, trong
                vòng 1-5 ngày sẽ có nhân viên tư vấn liên hệ và tư vấn cho bạn
              </p>
            </div>
          </div>
        </div>

        <div className="py-8 first:pt-4">
          <div className="flex gap-x-5">
            <QuestionMarkCircleIcon className="flex-shrink-0 mt-1 w-7 h-7 text-gray-500" />
            <div>
              <h3 className="md:text-lg font-semibold text-gray-800 dark:text-gray-100">
                Vì sao tôi vẫn chưa nhận được email thông báo xác nhận đăng ký?
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Vì đường truyền Internet có thể bị trục trặc bất ngờ, nên có thể
                email thông báo xác nhận đăng ký sẽ đến lâu hơn dự kiến. Bạn vui
                lòng kiên nhẫn chờ đợi nhé!
              </p>
            </div>
          </div>
        </div>

        <div className="py-8 first:pt-4">
          <div className="flex gap-x-5">
            <QuestionMarkCircleIcon className="flex-shrink-0 mt-1 w-7 h-7 text-gray-500" />
            <div>
              <h3 className="md:text-lg font-semibold text-gray-800 dark:text-gray-100">
                Làm sao để tra cứu kết quả học tập?
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Mỗi sinh viên sẽ được cấp một mã sinh viên duy nhất, bạn hãy
                dùng mã này để tra cứu
                <a
                  className="no-underline text-blue-500 font-medium"
                  href="/search/grade"
                >
                  {" tại đây"}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
